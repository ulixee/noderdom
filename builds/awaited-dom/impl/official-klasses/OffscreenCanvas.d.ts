import { IOffscreenCanvas, IImageBitmap } from '../../base/interfaces/official';
import { IOffscreenCanvasProperties } from '../../base/official-klasses/OffscreenCanvas';
export declare const getState: (instance: IOffscreenCanvas) => IOffscreenCanvasProperties, setState: (instance: IOffscreenCanvas, properties: Partial<IOffscreenCanvasProperties>) => void;
declare const OffscreenCanvasBaseClass: {
    new (_width: number, _height: number): {
        readonly height: Promise<number>;
        readonly width: Promise<number>;
        convertToBlob(options?: import("../../base/interfaces/official").IImageEncodeOptions | undefined): Promise<import("../../base/interfaces/official").IBlob>;
        transferToImageBitmap(): IImageBitmap;
    };
};
export default class OffscreenCanvas extends OffscreenCanvasBaseClass implements IOffscreenCanvas {
    transferToImageBitmap(): IImageBitmap;
}
export {};
