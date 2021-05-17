import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IFileList, IFile } from '../interfaces/official';
export declare const getState: (instance: IFileList) => IFileListProperties, setState: (instance: IFileList, properties: Partial<IFileListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IFileList>;
export declare const nodeFactory: NodeFactory<IFileList>;
export declare const awaitedIterator: AwaitedIterator<IFileList, IFile>;
export declare function FileListGenerator(): {
    new (): {
        [index: number]: IFile;
        readonly length: Promise<number>;
        item(index: number): IFile;
        then<TResult1 = IFileList, TResult2 = never>(onfulfilled?: ((value: IFileList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IFile>;
    };
};
export interface IFileListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const FileListPropertyKeys: string[];
export declare const FileListConstantKeys: never[];
