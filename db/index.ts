import Sqlite, { Database } from 'better-sqlite3';
import * as Path from 'path';

const dbName = 'main.db';
const dbPath = Path.resolve(__dirname, '../files/1-processed', dbName);
const db: Database = new Sqlite(dbPath);

export default db;
export { dbPath, dbName };
