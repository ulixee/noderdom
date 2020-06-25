export default class AwaitedPath {
    readonly hasAttachedId: boolean;
    private readonly jsPath;
    constructor(...jsPath: IJsPath);
    addProperty(name: IPropertyName): AwaitedPath;
    addMethod(name: IMethodName, ...args: IMethodArgs): AwaitedPath;
    withAttachedId(id: IAttachedId): AwaitedPath;
    toJSON(): IJsPath;
    static createFromString(path: string): AwaitedPath;
}
export declare type IJsPath = IPathStep[];
export declare type IPathStep = IPropertyName | IMethod | IAttachedId;
declare type IPropertyName = string;
declare type IMethod = [IMethodName, ...IMethodArgs];
declare type IMethodName = string;
declare type IMethodArgs = any[];
declare type IAttachedId = number;
export {};
