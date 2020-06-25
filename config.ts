import * as Path from 'path';
import { dbPath } from './db';

const dbDir = Path.resolve(__dirname, 'db');
const filesDir = Path.resolve(__dirname, 'files');
const filesImportedDir = Path.join(filesDir, '0-imported');
const filesProcessedDir = Path.join(filesDir, '1-processed');
const filesFinalizedDir = Path.join(filesDir, '2-finalized');

export default {
  dbDir,
  dbPath,
  filesDir,
  filesImportedDir,
  filesProcessedDir,
  filesFinalizedDir,
};
