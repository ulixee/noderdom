import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDOMRectReadOnly } from '../interfaces/official';
export declare const getState: (instance: IDOMRectReadOnly) => IDOMRectReadOnlyProperties, setState: (instance: IDOMRectReadOnly, properties: Partial<IDOMRectReadOnlyProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IDOMRectReadOnly>;
export declare function DOMRectReadOnlyGenerator(): {
    new (_x?: number, _y?: number, _width?: number, _height?: number): {
        readonly bottom: Promise<number>;
        readonly height: Promise<number>;
        readonly left: Promise<number>;
        readonly right: Promise<number>;
        readonly top: Promise<number>;
        readonly width: Promise<number>;
        readonly x: Promise<number>;
        readonly y: Promise<number>;
        toJSON(): Promise<any>;
    };
};
export interface IDOMRectReadOnlyProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly bottom?: Promise<number>;
    readonly height?: Promise<number>;
    readonly left?: Promise<number>;
    readonly right?: Promise<number>;
    readonly top?: Promise<number>;
    readonly width?: Promise<number>;
    readonly x?: Promise<number>;
    readonly y?: Promise<number>;
}
export declare const DOMRectReadOnlyPropertyKeys: string[];
export declare const DOMRectReadOnlyConstantKeys: never[];
