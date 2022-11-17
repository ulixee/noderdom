import { IJsPath } from '@ulixee/js-path';

export default class AwaitedPath {
  public readonly hasNodeId: boolean;
  private readonly jsPath: IJsPath;
  public parent: object | null;

  constructor(parent: object | null, ...jsPath: IJsPath) {
    this.jsPath = jsPath;
    this.parent = parent;
    this.hasNodeId = jsPath && jsPath.length > 0 && typeof jsPath[0] === 'number';
  }

  public addProperty(parent: object | null, name: string) {
    return new AwaitedPath(parent, ...this.jsPath, name);
  }

  public addMethod(parent: object | null, name: string, ...args: any[]) {
    return new AwaitedPath(parent, ...this.jsPath, [name, ...args]);
  }

  public withNodeId(parent: object | null, id: number) {
    return new AwaitedPath(parent, id);
  }

  public toJSON() {
    return this.jsPath;
  }

  public static createFromString(parent: object | null, path: string): AwaitedPath {
    let pendingString = '';
    let topPath: any[] = [];
    const jsPath: IJsPath = topPath as any;
    const stack: string[][] = [topPath];
    let isEscape = false;
    let isMethodCall = false;
    let isQuoteStarted = '';

    const pushChars = new Set(['.', '(', ')', ',', '[', ']']);
    for (let i = 0; i < path.length; i++) {
      const char = path.charAt(i);
      if (char === '\\') {
        isEscape = !isEscape;
        continue;
      }
      if (!isEscape && (char === "'" || char === '`' || char === '"')) {
        if (isQuoteStarted === char) {
          topPath.push(pendingString);
          pendingString = '';
          isQuoteStarted = '';
        } else if (!isQuoteStarted) {
          isQuoteStarted = char;
        } else {
          pendingString += char;
        }
        continue;
      }

      if (isQuoteStarted) {
        pendingString += char;
        isEscape = false;
        continue;
      }

      if (char === '\\s' || char === ' ' || char === '\t' || char === '\n') {
        isEscape = false;
        // don't add spacing to an empty pending string
        if (!pendingString) continue;
      }

      if (!isEscape) {
        if (char === '(') {
          topPath = [];
          isMethodCall = true;
          stack.push(topPath);
          jsPath.push(topPath as any);
        }

        if (pushChars.has(char)) {
          if (isMethodCall && pendingString.match(/^\d+$/)) {
            topPath.push(Number(pendingString));
          } else if (pendingString) {
            topPath.push(pendingString);
          }
          pendingString = '';
        }

        if (char === ')') {
          isMethodCall = false;
          stack.pop();
          topPath = stack[stack.length - 1];
        }

        if (!pushChars.has(char)) {
          pendingString += char;
        }
      }

      isEscape = false;
    }
    if (pendingString) topPath.push(pendingString);
    return new AwaitedPath(parent, ...jsPath);
  }
}
