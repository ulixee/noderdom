import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDOMRect } from '../interfaces/official';
export declare const getState: (instance: IDOMRect) => IDOMRectProperties, setState: (instance: IDOMRect, properties: Partial<IDOMRectProperties>) => void, recordProxy: (proxy: IDOMRect, instance: IDOMRect) => void;
export declare const awaitedHandler: AwaitedHandler<IDOMRect>;
export declare function DOMRectGenerator(): {
    new (_x?: number | undefined, _y?: number | undefined, _width?: number | undefined, _height?: number | undefined): {
        readonly height: Promise<number>;
        readonly width: Promise<number>;
        readonly x: Promise<number>;
        readonly y: Promise<number>;
    };
};
export interface IDOMRectProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly height?: Promise<number>;
    readonly width?: Promise<number>;
    readonly x?: Promise<number>;
    readonly y?: Promise<number>;
}
export declare const DOMRectPropertyKeys: string[];
export declare const DOMRectConstantKeys: never[];
