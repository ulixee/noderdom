export default class AwaitedPath {
  public readonly hasNodeId: boolean;
  private readonly jsPath: IJsPath;
  public parent: object | null;

  constructor(parent: object | null, ...jsPath: IJsPath) {
    this.jsPath = jsPath;
    this.parent = parent;
    this.hasNodeId = jsPath && jsPath.length > 0 && typeof jsPath[0] === 'number';
  }

  public addProperty(parent: object | null, name: IPropertyName) {
    return new AwaitedPath(parent, ...this.jsPath, name);
  }

  public addMethod(parent: object | null, name: IMethodName, ...args: IMethodArgs) {
    return new AwaitedPath(parent, ...this.jsPath, [name, ...args]);
  }

  public withNodeId(parent: object | null, id: INodeId) {
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
    let isQuoteStarted = false;

    const pushChars = new Set(['.', '(', ')', ',', '[', ']']);
    for (const char of path) {
      if (char === '\\') {
        isEscape = !isEscape;
        continue;
      }
      if (!isEscape && (char === "'" || char === '`' || char === '"')) {
        if (isQuoteStarted) {
          topPath.push(pendingString);
          pendingString = '';
        }
        isQuoteStarted = !isQuoteStarted;
        continue;
      }

      if (isQuoteStarted) {
        pendingString += char;
        continue;
      }

      if (char === '\\s' || char === ' ' || char === '\t') {
        // don't add spacing to an empty pending string
        if (!pendingString) continue;
      }

      if (char === '(' && !isEscape) {
        topPath = [];
        isMethodCall = true;
        stack.push(topPath);
        jsPath.push(topPath as any);
      }

      if (!isEscape && pushChars.has(char)) {
        if (isMethodCall && pendingString.match(/^\d+$/)) {
          topPath.push(Number(pendingString));
        } else if (pendingString) {
          topPath.push(pendingString);
        }
        pendingString = '';
      }

      if (char === ')' && !isEscape) {
        isMethodCall = false;
        stack.pop();
        topPath = stack[stack.length - 1];
      }

      if (!pushChars.has(char) && !isEscape) {
        pendingString += char;
      }
      isEscape = false;
    }
    if (pendingString) topPath.push(pendingString);
    return new AwaitedPath(parent, ...jsPath);
  }
}

export type IJsPath = IPathStep[];
export type IPathStep = IPropertyName | IMethod | INodeId;
type IPropertyName = string;
type IMethod = [IMethodName, ...IMethodArgs];
type IMethodName = string;
type IMethodArgs = any[];
type INodeId = number;
