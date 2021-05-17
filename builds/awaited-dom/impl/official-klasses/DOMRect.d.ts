import { IDOMRect } from '../../base/interfaces/official';
import { IDOMRectProperties } from '../../base/official-klasses/DOMRect';
export declare const getState: (instance: IDOMRect) => IDOMRectProperties, setState: (instance: IDOMRect, properties: Partial<IDOMRectProperties>) => void;
declare const DOMRectBaseClass: {
    new (_x?: number | undefined, _y?: number | undefined, _width?: number | undefined, _height?: number | undefined): {
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
export default class DOMRect extends DOMRectBaseClass implements IDOMRect {
    constructor(_x?: number, _y?: number, _width?: number, _height?: number);
}
export {};
