import * as Path from 'path';
import * as Fs from 'fs';
import db from '../index';

const sqlDir = Path.resolve(__dirname, '../sql');

const sqlFilenames = ['interfaces', 'interface_relationships', 'methods', 'properties', 'selection_choices'];

for (const sqlFilename of sqlFilenames) {
  try {
    const sql = Fs.readFileSync(Path.resolve(sqlDir, `${sqlFilename}.sql`), 'utf8');
    db.prepare(sql).run();
  } catch (error) {
    console.log(`${sqlFilename} ERROR: `, error);
  }
}
