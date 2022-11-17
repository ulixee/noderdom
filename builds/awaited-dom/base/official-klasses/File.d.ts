import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IFile, IBlob, IBlobPart, IFilePropertyBag } from '../interfaces/official';
import { IBlobProperties } from './Blob';
export declare const getState: (instance: IFile) => IFileProperties, setState: (instance: IFile, properties: Partial<IFileProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IFile>;
export declare function FileGenerator(Blob: Constructable<IBlob>): {
    new (_fileBits: Iterable<IBlobPart>, _fileName: string, _options?: IFilePropertyBag): {
        readonly lastModified: Promise<number>;
        readonly name: Promise<string>;
        readonly size: Promise<number>;
        readonly type: Promise<string>;
        arrayBuffer(): Promise<ArrayBuffer>;
        slice(start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Promise<IBlob>;
        text(): Promise<string>;
    };
};
export interface IFileProperties extends IBlobProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly lastModified?: Promise<number>;
    readonly name?: Promise<string>;
}
export declare const FilePropertyKeys: string[];
export declare const FileConstantKeys: never[];
