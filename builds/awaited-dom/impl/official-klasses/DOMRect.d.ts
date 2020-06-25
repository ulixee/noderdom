import { IDOMRect } from '../../base/interfaces/official';
import { IDOMRectProperties } from '../../base/official-klasses/DOMRect';
export declare const getState: <C = IDOMRect, P = IDOMRectProperties>(instance: C) => P, setState: <P = IDOMRectProperties>(instance: IDOMRect, properties: P) => void;
declare const DOMRectBaseClass: {
    new (_x?: number | undefined, _y?: number | undefined, _width?: number | undefined, _height?: number | undefined): {
        readonly height: Promise<number>;
        readonly width: Promise<number>;
        readonly x: Promise<number>;
        readonly y: Promise<number>;
    };
};
export default class DOMRect extends DOMRectBaseClass implements IDOMRect {
}
export {};
