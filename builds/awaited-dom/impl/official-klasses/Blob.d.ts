import { IBlob } from '../../base/interfaces/official';
import { IBlobProperties } from '../../base/official-klasses/Blob';
export declare const getState: (instance: IBlob) => IBlobProperties, setState: (instance: IBlob, properties: Partial<IBlobProperties>) => void;
declare const BlobBaseClass: {
    new (_blobParts?: Iterable<import("../../base/interfaces/official").IBlobPart> | undefined, _options?: import("../../base/interfaces/official").IBlobPropertyBag | undefined): {
        readonly size: Promise<number>;
        readonly type: Promise<string>;
        arrayBuffer(): Promise<ArrayBuffer>;
        slice(start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Promise<IBlob>;
        text(): Promise<string>;
    };
};
export default class Blob extends BlobBaseClass implements IBlob {
}
export {};
