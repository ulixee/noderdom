#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import db from '../../db';
import config from '../../config';
import IDomType, { DomType } from '../../src/interfaces/IDomType';

const domType: IDomType = DomType.awaited;
const docs: any[] = [];
const allInterfaces = db.prepare('SELECT * FROM interfaces WHERE hasDefinedIDL=1 ORDER BY name').all();
const docsPath = Path.join(config.filesFinalizedDir, `${domType}-dom`, 'docs.json');

allInterfaces.map(inter => {
  const name = inter.name;

  const propertiesSql = `SELECT * FROM properties WHERE interfaceName=? AND hasDefinedIDL=1 ORDER BY localName COLLATE NOCASE`;
  const properties = db.prepare(propertiesSql).all([inter.name]);

  const methodsSql = `SELECT * FROM methods WHERE interfaceName=? AND hasDefinedIDL=1 ORDER BY localName COLLATE NOCASE`;
  const methods = db.prepare(methodsSql).all([inter.name]);

  docs.push({
    name,
    category: inter.category,
    overview: inter.docOverview,
    properties: properties.map(p => ({
      name: p.localName,
      overview: p.docOverview,
    })),
    methods: methods.map(m => ({
      name: m.localName,
      overview: m.docOverview,
    })),
  });
});

Fs.writeFileSync(docsPath, JSON.stringify(docs, null, 2));
