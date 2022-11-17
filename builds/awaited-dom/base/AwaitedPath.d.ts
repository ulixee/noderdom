import { IJsPath } from '@ulixee/js-path';
export default class AwaitedPath {
    readonly hasNodeId: boolean;
    private readonly jsPath;
    parent: object | null;
    constructor(parent: object | null, ...jsPath: IJsPath);
    addProperty(parent: object | null, name: string): AwaitedPath;
    addMethod(parent: object | null, name: string, ...args: any[]): AwaitedPath;
    withNodeId(parent: object | null, id: number): AwaitedPath;
    toJSON(): IJsPath;
    static createFromString(parent: object | null, path: string): AwaitedPath;
}
