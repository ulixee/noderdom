import { IDOMRectReadOnly } from '../../base/interfaces/official';
import { IDOMRectReadOnlyProperties } from '../../base/official-klasses/DOMRectReadOnly';
export declare const getState: (instance: IDOMRectReadOnly) => IDOMRectReadOnlyProperties, setState: (instance: IDOMRectReadOnly, properties: Partial<IDOMRectReadOnlyProperties>) => void;
declare const DOMRectReadOnlyBaseClass: {
    new (_x?: number | undefined, _y?: number | undefined, _width?: number | undefined, _height?: number | undefined): {
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
export default class DOMRectReadOnly extends DOMRectReadOnlyBaseClass implements IDOMRectReadOnly {
}
export {};
