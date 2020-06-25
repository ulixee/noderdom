#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import Components from '../../../src/Components';
import config from '../../../config';
import db from '../../../db';
import SuperGenerator from '../../../src/SuperGenerator';

const componentsPath = Path.resolve(__dirname, config.filesProcessedDir, 'components-standard.json');
if (!Fs.existsSync(componentsPath)) throw new Error(`components-standard.json was not found: ${componentsPath}`);

const componentsData = JSON.parse(Fs.readFileSync(componentsPath, 'utf-8'));
const components = new Components(componentsData);
const superInterfaces = Object.values(SuperGenerator.injectIntoComponents(components).awaitedSupers);

console.log(''.padEnd(100, '-'));
console.log('INSERTING INTO DB...');

for (const superInterface of superInterfaces) {
  const data = {
    name: superInterface.name,
    interfaceName: superInterface.name.replace(/^Super/, ''),
  };

  {
    const existing = db.prepare(`SELECT * FROM supers WHERE name=?`).get([superInterface.name]);
    if (!existing) {
      const fields = Object.keys(data).join(', ');
      const values = Object.values(data);
      const placeholders = [...values].fill('?').join(', ');
      db.prepare(`INSERT INTO supers (${fields}) VALUES(${placeholders})`).run(values);
    }
  }

  for (const isolateName of superInterface.implements!) {
    const existing = db
      .prepare(`SELECT * FROM super_isolates WHERE name=? AND superName=?`)
      .get([isolateName, superInterface.name]);
    if (!existing) {
      const fields = ['name', 'superName', 'interfaceName'];
      const values = [isolateName, superInterface.name, isolateName.replace(/Isolate$/, '')].map(v => `'${v}'`);
      const sql = `INSERT INTO super_isolates (${fields.join(', ')}) VALUES(${values.join(', ')})`;
      try {
        db.prepare(sql).run();
      } catch (error) {
        throw error;
      }
    }
  }
}

console.log(''.padEnd(100, '-'));
console.log('DONE');
console.log(''.padEnd(100, '-'));
console.log('');
