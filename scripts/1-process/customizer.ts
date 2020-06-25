#!/usr/bin/env ts-node

import * as Path from 'path';
import db from '../../db';
import VueRunner from 'vue-runner';
import Customizer from './customizer/Customizer';

const vuePath = Path.resolve(__dirname, './customizer.vue');
const vueRunner = new VueRunner(vuePath, { title: 'Noderdom Selector'});

vueRunner.attachAPI((apiServer: any) => {
  apiServer.get('/data', (_req: any, res: any) => {
    const customizer = new Customizer();
    const { klasses, choicesMetaMap } = customizer;
    res.send({ klasses, choicesMetaMap });
  });

  apiServer.post('/choices', (req: any, res: any) => {
    const { domType, metasByName } = req.body;
    Object.entries(metasByName).forEach(entry => {
      const [name, meta]: [string, any] = entry;
      const primaryKey = [name, domType];
      const existing = db.prepare('SELECT * FROM component_filters WHERE name=? AND domType=?').get(primaryKey);
      const data = {
        name,
        domType,
        itemType: meta.itemType,
        isCore: Number(meta.isCore || 0),
        isAbstract: Number(meta.isAbstract || 0),
        isEnabled: Number(meta.isEnabled || 0),
        isHidden: Number(meta.isHidden || 0),
        isWritable: Number(meta.isWritable || 0),
      };
      if (existing) {
        const values = [...Object.values(data), ...primaryKey];
        const sql = `UPDATE component_filters SET ${Object.keys(data).map(k => `${k}=?`)} WHERE name=? AND domType=?`;
        db.prepare(sql).run(values);
      } else {
        const fields = Object.keys(data).join(', ');
        const values = Object.values(data);
        const placeholders = [...values].fill('?').join(', ');
        db.prepare(`INSERT INTO component_filters (${fields}) VALUES(${placeholders})`).run(values);
      }
    });

    res.send({ saved: true });
  });
});
