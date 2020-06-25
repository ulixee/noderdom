import * as Path from 'path';
import * as Fs from 'fs';
import IDomType, { DomType } from './interfaces/IDomType';

const srcDir = Path.join(__dirname, './exports-for-base');

export default class Exports {
  public static moveToDir(dir: string, domType: IDomType) {
    for (const filename of Fs.readdirSync(srcDir)) {
      if (!filename.match(/\.ts$/)) continue;
      if (filename.match(/^Awaited/) && domType !== DomType.awaited) continue;
      if (filename.match(/^Detached/) && domType !== DomType.detached) continue;
      const fromFilepath = Path.resolve(srcDir, filename);
      const toFilepath = Path.resolve(dir, filename);
      Fs.copyFileSync(fromFilepath, toFilepath);
    }
  }
}
