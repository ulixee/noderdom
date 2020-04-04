import * as Path from 'path';
import * as Fs from 'fs';

const srcDir = Path.join(__dirname, './exports');

export default class Exports {
  public static moveToDir(dir: string) {
    const isDynamic = dir.match(/([^\/]+)\/?$/)![1] === 'dynamic';
    const isStatic = dir.match(/([^\/]+)\/?$/)![1] === 'static';
    for (const filename of Fs.readdirSync(srcDir)) {
      if (!filename.match(/\.ts$/)) continue;
      if (filename.match(/^Dynamic/) && !isDynamic) continue;
      if (filename.match(/^Static/) && !isStatic) continue;
      const fromFilepath = Path.resolve(srcDir, filename);
      const toFilepath = Path.resolve(dir, filename);
      Fs.copyFileSync(fromFilepath, toFilepath);
    }
  }
}
