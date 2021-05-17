import { IImageBitmap } from '../../base/interfaces/official';
import { IImageBitmapProperties } from '../../base/official-klasses/ImageBitmap';
export declare const getState: (instance: IImageBitmap) => IImageBitmapProperties, setState: (instance: IImageBitmap, properties: Partial<IImageBitmapProperties>) => void;
declare const ImageBitmapBaseClass: {
    new (): {
        readonly height: Promise<number>;
        readonly width: Promise<number>;
        close(): Promise<void>;
    };
};
export default class ImageBitmap extends ImageBitmapBaseClass implements IImageBitmap {
}
export {};
