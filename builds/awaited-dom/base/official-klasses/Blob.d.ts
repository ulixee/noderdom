import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IBlob, IBlobPart, IBlobPropertyBag } from '../interfaces/official';
export declare const getState: (instance: IBlob) => IBlobProperties, setState: (instance: IBlob, properties: Partial<IBlobProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IBlob>;
export declare function BlobGenerator(): {
    new (_blobParts?: Iterable<IBlobPart> | undefined, _options?: IBlobPropertyBag | undefined): {
        readonly size: Promise<number>;
        readonly type: Promise<string>;
        arrayBuffer(): Promise<ArrayBuffer>;
        slice(start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Promise<IBlob>;
        text(): Promise<string>;
    };
};
export interface IBlobProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly size?: Promise<number>;
    readonly type?: Promise<string>;
}
export declare const BlobPropertyKeys: string[];
export declare const BlobConstantKeys: never[];
