#!/usr/bin/env ts-node

import * as Fs from 'fs';
import * as Path from 'path';
import db from '../../db';
import config from '../../config';
import IDomType, { DomType } from '../../src/interfaces/IDomType';

const domType: IDomType = DomType.awaited;
const docs: any[] = [];
const allInterfaces = db.prepare('SELECT * FROM interfaces WHERE hasDefinedIDL=1 ORDER BY name').all();
const allSupers = db.prepare('SELECT * FROM supers ORDER BY name').all();
const docsPath = Path.join(config.filesFinalizedDir, `${domType}-dom`, 'docs.json');

allInterfaces.map(inter => {
  const name = inter.name;

  const propertiesSql = `SELECT * FROM properties WHERE interfaceName=? AND hasDefinedIDL=1 ORDER BY localName COLLATE NOCASE`;
  const properties = db.prepare(propertiesSql).all([inter.name]);

  const methodsSql = `SELECT * FROM methods WHERE interfaceName=? AND hasDefinedIDL=1 ORDER BY localName COLLATE NOCASE`;
  const methods = db.prepare(methodsSql).all([inter.name]);

  docs.push({
    name,
    mdnCategory: inter.mdnCategory,
    tags: inter.tags,
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

allSupers.map(sup => {
  const name = sup.name;

  const interSql = `SELECT * FROM interfaces WHERE name=? AND hasDefinedIDL=1`;
  const inter = db.prepare(interSql).get([sup.interfaceName]);

  const dependenciesSql = `SELECT * FROM super_isolates WHERE superName=? ORDER BY interfaceName COLLATE NOCASE`;
  const dependencies = db.prepare(dependenciesSql).all([sup.name]);

  docs.push({
    name,
    tags: 'Super',
    overview: inter.docOverview,
    dependencies: dependencies.map(d => ({
      name: d.interfaceName,
    })),
    properties: [],
    methods: [],
  });
});

Fs.writeFileSync(docsPath, JSON.stringify(docs, null, 2));
