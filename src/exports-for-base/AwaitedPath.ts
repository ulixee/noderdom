export default class AwaitedPath {
  public readonly hasAttachedId: boolean;
  private readonly jsPath: IJsPath;

  constructor(...jsPath: IJsPath) {
    this.jsPath = jsPath;
    this.hasAttachedId = jsPath && jsPath.length > 0 && typeof jsPath[0] === 'number';
  }

  public addProperty(name: IPropertyName) {
    return new AwaitedPath(...this.jsPath, name);
  }

  public addMethod(name: IMethodName, ...args: IMethodArgs) {
    return new AwaitedPath(...this.jsPath, [name, ...args]);
  }

  public withAttachedId(id: IAttachedId) {
    return new AwaitedPath(id);
  }

  public toJSON() {
    return this.jsPath;
  }

  public static createFromString(path: string): AwaitedPath {
    // ToDo: this must handle any javascript string: array indexes, methods, args, etc
    return new AwaitedPath(...path.split('.'));
  }
}

export type IJsPath = IPathStep[];
export type IPathStep = IPropertyName | IMethod | IAttachedId;
type IPropertyName = string;
type IMethod = [IMethodName, ...IMethodArgs];
type IMethodName = string;
type IMethodArgs = any[];
type IAttachedId = number;
