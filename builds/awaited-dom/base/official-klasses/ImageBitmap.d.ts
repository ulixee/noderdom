import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IImageBitmap } from '../interfaces/official';
export declare const getState: (instance: IImageBitmap) => IImageBitmapProperties, setState: (instance: IImageBitmap, properties: Partial<IImageBitmapProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IImageBitmap>;
export declare function ImageBitmapGenerator(): {
    new (): {
        readonly height: Promise<number>;
        readonly width: Promise<number>;
        close(): Promise<void>;
    };
};
export interface IImageBitmapProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly height?: Promise<number>;
    readonly width?: Promise<number>;
}
export declare const ImageBitmapPropertyKeys: string[];
export declare const ImageBitmapConstantKeys: never[];
