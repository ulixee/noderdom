import * as Path from 'path';

const dbDir = Path.resolve(__dirname, 'db');
const filesDir = Path.resolve(__dirname, 'files');
const filesImportedDir = Path.join(filesDir, '0-imported');
const filesProcessedDir = Path.join(filesDir, '1-processed');
const filesFinalizedDir = Path.join(filesDir, '2-finalized');

export default {
  dbDir,
  filesDir,
  filesImportedDir,
  filesProcessedDir,
  filesFinalizedDir,
};
