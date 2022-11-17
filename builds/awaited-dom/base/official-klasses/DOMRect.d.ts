import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMRect, IDOMRectReadOnly } from '../interfaces/official';
import { IDOMRectReadOnlyProperties } from './DOMRectReadOnly';
export declare const getState: (instance: IDOMRect) => IDOMRectProperties, setState: (instance: IDOMRect, properties: Partial<IDOMRectProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IDOMRect>;
export declare function DOMRectGenerator(DOMRectReadOnly: Constructable<IDOMRectReadOnly>): {
    new (_x?: number, _y?: number, _width?: number, _height?: number): {
        readonly height: Promise<number>;
        readonly width: Promise<number>;
        readonly x: Promise<number>;
        readonly y: Promise<number>;
        readonly bottom: Promise<number>;
        readonly left: Promise<number>;
        readonly right: Promise<number>;
        readonly top: Promise<number>;
        toJSON(): Promise<any>;
    };
};
export interface IDOMRectProperties extends IDOMRectReadOnlyProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly height?: Promise<number>;
    readonly width?: Promise<number>;
    readonly x?: Promise<number>;
    readonly y?: Promise<number>;
}
export declare const DOMRectPropertyKeys: string[];
export declare const DOMRectConstantKeys: never[];
