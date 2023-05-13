#!/usr/bin/env ts-node

import db from '../../db';
import Customizer from './customizer/Customizer';
import * as http from 'http';
import { AddressInfo } from 'net';
import * as Fs from 'fs';
import * as Path from 'path';

async function readJson(req: http.IncomingMessage): Promise<any> {
  const parsed: string[] = [];
  for await (const chunk of req) {
    parsed.push(chunk.toString());
  }
  return JSON.parse(parsed.join(''));
}

const server = new http.Server();
server.listen({ port: process.env.PORT ?? 3000 }, () => {
  console.log('Noderdom Selector started at localhost:' + (server.address() as AddressInfo).port);
  server.on('request', async (req, res) => {
    if (req.url === '/data') {
      const customizer = new Customizer();
      const { klasses, choicesMetaMap } = customizer;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ klasses, choicesMetaMap }));
      return;
    }

    if (req.url === '/choices') {
      const { domType, metasByName } = await readJson(req);
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
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ saved: true }));
    }

    if (req.url === 'index.html' || req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      return Fs.createReadStream(Path.join(__dirname, 'site', 'index.html')).pipe(res);
    }
    if (req.url.startsWith('/js') || req.url.startsWith('/css')) {
      res.setHeader('Content-Type', req.url.startsWith('/js') ? 'application/javascript' : 'text/css');
      return Fs.createReadStream(Path.join(__dirname, 'site', req.url)).pipe(res);
    }
    res.writeHead(404);
    res.end();
  });
});
