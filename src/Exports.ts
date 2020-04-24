import * as Path from 'path';
import * as Fs from 'fs';

const srcDir = Path.join(__dirname, './exports');

export default class Exports {
  public static moveToDir(dir: string) {
    const dirName = dir.match(/([^\/]+)\/?$/)![1] || '';
    const isAwaited = dirName.includes('awaited');
    const isDetached = dirName.includes('detached');
    for (const filename of Fs.readdirSync(srcDir)) {
      if (!filename.match(/\.ts$/)) continue;
      if (filename.match(/^Awaited/) && !isAwaited) continue;
      if (filename.match(/^Detached/) && !isDetached) continue;
      const fromFilepath = Path.resolve(srcDir, filename);
      const toFilepath = Path.resolve(dir, filename);
      Fs.copyFileSync(fromFilepath, toFilepath);
    }
  }
}
