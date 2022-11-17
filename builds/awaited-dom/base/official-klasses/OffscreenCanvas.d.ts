import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IOffscreenCanvas, IImageEncodeOptions, IBlob, IImageBitmap } from '../interfaces/official';
export declare const getState: (instance: IOffscreenCanvas) => IOffscreenCanvasProperties, setState: (instance: IOffscreenCanvas, properties: Partial<IOffscreenCanvasProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IOffscreenCanvas>;
export declare function OffscreenCanvasGenerator(): {
    new (_width: number, _height: number): {
        readonly height: Promise<number>;
        readonly width: Promise<number>;
        convertToBlob(options?: IImageEncodeOptions): Promise<IBlob>;
        transferToImageBitmap(): IImageBitmap;
    };
};
export interface IOffscreenCanvasProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly height?: Promise<number>;
    readonly width?: Promise<number>;
}
export declare const OffscreenCanvasPropertyKeys: string[];
export declare const OffscreenCanvasConstantKeys: never[];
