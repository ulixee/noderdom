#!/usr/bin/env ts-node

import * as Path from 'path';
import db from '../../../db';
import config from '../../../config';
import DocumentationExtractor, { IMDNMethodParameter } from '../../../src/DocumentationExtractor';

const interchangeableParamNames = new Map<string, string>([
  ['tagName', 'localName'],
  ['tagName', 'qualifiedName'],
  ['tokenN', 'tokens'],
  ['attrName', 'qualifiedName'],
  ['attrName', 'localName'],
  ['nodeName', 'localName'],
  ['position', 'where'],
  ['documentType', 'doctype'],
  ['markup', 'text'],
  ['line', 'text'],
  ['contextType', 'contextId'],
  ['contextAttributes', 'args'],
  ['tagString', 'fragment'],
  ['str', 'name'],
  ['listener', 'callback'],
  ['listener', 'callback'],
  ['aChild', 'node'],
  ['referenceNode', 'child'],
  ['newChild', 'node'],
]);

let dbMethods = db
  .prepare(
    'SELECT * FROM methods m WHERE m.isOnMdn=1 and m.mdnFilename is not null ' +
      'and exists (select 1 from method_signatures ms where ms.methodName = m.name)',
  )
  .all();

if (process.argv[2]) {
  const name = process.argv[2];
  dbMethods = dbMethods.filter(x => x.name === name);
  console.log('Filtering list to %s', name);
}

let methodParameterCount = 0;
let accurateParametersCount = 0;

dbMethods.forEach(dbMethod => {
  const methodName = dbMethod.name;
  if (!dbMethod.mdnFilename) return;

  const filepath = Path.resolve(config.filesImportedDir, 'mdn-specs', dbMethod.mdnFilename);
  const documentExtractor = new DocumentationExtractor(filepath);
  if (!documentExtractor.foundFile) return;

  const existingSignatures = db.prepare(`SELECT * FROM method_signatures WHERE methodName=?`).all([methodName]);

  const existingSignatureCount = new Set(existingSignatures.map(x => x.signatureIndex)).size;
  const mdnMethodSignatures = documentExtractor.extractMethodSignatures(dbMethod.name.split('.').pop());
  methodParameterCount += existingSignatures.length;

  let signatureIndex = 0;
  for (const mdnSignature of mdnMethodSignatures) {
    const existingParams = existingSignatures
      .filter(x => x.signatureIndex === signatureIndex)
      .sort((a, b) => a.paramIndex - b.paramIndex);

    for (let paramIndex = 0; paramIndex < mdnSignature.parameters.length; paramIndex += 1) {
      const mdnParameter = mdnSignature.parameters[paramIndex];
      const existing = existingParams[paramIndex];
      const data = {
        docOverview: mdnParameter.description.trim(),
        isOnMDN: Number(true || 0),
        mdnDocumentationPath: dbMethod.mdnDocumentationPath,
        mdnFilename: dbMethod.mdnFilename,
      };

      const updateParamIndex = paramIndex;

      const multiType = existing?.paramType.split(' | ');
      if (multiType?.length > 1) {
        const next = mdnSignature.parameters[paramIndex + 1];
        if (next) {
          data.docOverview = `<ul>
<li>
    ${mdnParameter.description.trim()}
</li>
<li>
    ${next.description.trim()}
</li>`;
          paramIndex += 1;
          accurateParametersCount += 1;
        }
      }

      if (
        existing &&
        mdnParameter.name === existing.paramName &&
        mdnParameter.optional === Boolean(existing.isOptional)
      ) {
        accurateParametersCount += 1;
      } else if (!(multiType?.length > 1)) {
        const isDiff = logDiffs(methodName, signatureIndex, updateParamIndex, existing, mdnParameter);
        if (!isDiff) accurateParametersCount += 1;
      }

      const values = [...Object.values(data), methodName, signatureIndex, updateParamIndex];
      db.prepare(
        `UPDATE method_signatures SET ${Object.keys(data).map(
          k => `${k}=?`,
        )} WHERE methodName=? and signatureIndex=? and paramIndex=?`,
      ).run(values);
    }

    signatureIndex += 1;
  }

  if (signatureIndex !== existingSignatureCount) {
    console.log('\nMDN -> %s has %s MDN signatures vs %s IDL\n', dbMethod.name, signatureIndex, existingSignatureCount);
  }
});

console.log('\n');

console.log(''.padEnd(150, '='));
console.log(`${accurateParametersCount} of ${methodParameterCount} WEBIDL Method Parameters ARE ACCURATE`);
console.log('');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function logDiffs(
  methodName: any,
  signatureIndex: number,
  paramIndex: number,
  existing: any,
  mdnParameter: IMDNMethodParameter,
) {
  if (!existing) {
    console.log(
      `PARAM MISSING IN IDL for %s#%s. Parameter %s: MDN name=%s, optional=%s`,
      methodName,
      signatureIndex,
      paramIndex,
      mdnParameter.name,
      mdnParameter.optional,
    );
  } else if (mdnParameter.name !== existing.paramName) {
    // assume they just renamed it
    if (
      mdnParameter.name.toLowerCase().includes(existing.paramName.toLowerCase()) ||
      existing.paramName.toLowerCase().includes(mdnParameter.name.toLowerCase()) ||
      interchangeableParamNames.get(mdnParameter.name) === existing.paramName
    ) {
      return false;
    }
    console.log(
      `PARAM NAME diff for %s#%s. Parameter %s: MDN=%s vs IDL=%s`,
      methodName,
      signatureIndex,
      paramIndex,
      mdnParameter.name,
      existing.paramName,
    );
  } else {
    console.log(
      `PARAM OPTIONAL diff for %s#%s. Parameter %s, %s. MDN=%s vs IDL=%s`,
      methodName,
      signatureIndex,
      paramIndex,
      mdnParameter.name,
      mdnParameter.optional,
      Boolean(existing.isOptional),
    );
  }
  return true;
}
