export default class AwaitedPath {
  private readonly pathSteps: IPathStep[];

  constructor(pathSteps?: IPathStep[]) {
    this.pathSteps = pathSteps || [];
  }

  public addProperty(name: IPropertyName) {
    return new AwaitedPath([...this.pathSteps, name]);
  }

  public addMethod(name: IMethodName, ...args: IMethodArgs) {
    return new AwaitedPath([...this.pathSteps, [name, args]]);
  }

  public toJSON() {
    return this.pathSteps;
  }
}

type IPathStep = IPropertyName | IMethod;
type IPropertyName = string;
type IMethod = [IMethodName, IMethodArgs];
type IMethodName = string;
type IMethodArgs = any[];
