import { IDOMRect } from '../../base/interfaces/official';
import { IDOMRectProperties } from '../../base/official-klasses/DOMRect';
export declare const getState: (instance: IDOMRect) => IDOMRectProperties, setState: (instance: IDOMRect, properties: Partial<IDOMRectProperties>) => void, recordProxy: (proxy: IDOMRect, instance: IDOMRect) => void;
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
