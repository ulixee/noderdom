import { IFileList, IFile } from '../../base/interfaces/official';
import { IFileListProperties } from '../../base/official-klasses/FileList';
export declare const getState: (instance: IFileList) => IFileListProperties, setState: (instance: IFileList, properties: Partial<IFileListProperties>) => void;
declare const FileListBaseClass: {
    new (): {
        [index: number]: IFile;
        readonly length: Promise<number>;
        item(index: number): IFile;
        then<TResult1 = IFileList, TResult2 = never>(onfulfilled?: ((value: IFileList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IFile, any, undefined>;
    };
};
export default class FileList extends FileListBaseClass implements IFileList {
    item(index: number): IFile;
}
export {};
