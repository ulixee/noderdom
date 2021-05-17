import { IFile, IBlobPart, IFilePropertyBag } from '../../base/interfaces/official';
import { IFileProperties } from '../../base/official-klasses/File';
export declare const getState: (instance: IFile) => IFileProperties, setState: (instance: IFile, properties: Partial<IFileProperties>) => void;
declare const FileBaseClass: {
    new (_fileBits: Iterable<IBlobPart>, _fileName: string, _options?: IFilePropertyBag | undefined): {
        readonly lastModified: Promise<number>;
        readonly name: Promise<string>;
        readonly size: Promise<number>;
        readonly type: Promise<string>;
        arrayBuffer(): Promise<ArrayBuffer>;
        slice(start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Promise<import("../../base/interfaces/official").IBlob>;
        text(): Promise<string>;
    };
};
export default class File extends FileBaseClass implements IFile {
    constructor(_fileBits: Iterable<IBlobPart>, _fileName: string, _options?: IFilePropertyBag);
}
export {};
