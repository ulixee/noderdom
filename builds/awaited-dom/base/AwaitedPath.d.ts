export default class AwaitedPath {
    readonly hasNodeId: boolean;
    private readonly jsPath;
    parent: object | null;
    constructor(parent: object | null, ...jsPath: IJsPath);
    addProperty(parent: object | null, name: IPropertyName): AwaitedPath;
    addMethod(parent: object | null, name: IMethodName, ...args: IMethodArgs): AwaitedPath;
    withNodeId(parent: object | null, id: INodeId): AwaitedPath;
    toJSON(): IJsPath;
    static createFromString(parent: object | null, path: string): AwaitedPath;
}
export declare type IJsPath = IPathStep[];
export declare type IPathStep = IPropertyName | IMethod | INodeId;
declare type IPropertyName = string;
declare type IMethod = [IMethodName, ...IMethodArgs];
declare type IMethodName = string;
declare type IMethodArgs = any[];
declare type INodeId = number;
export {};
