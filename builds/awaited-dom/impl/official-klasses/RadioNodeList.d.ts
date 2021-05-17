import { IRadioNodeList } from '../../base/interfaces/official';
import { IRadioNodeListProperties } from '../../base/official-klasses/RadioNodeList';
export declare const getState: (instance: IRadioNodeList) => IRadioNodeListProperties, setState: (instance: IRadioNodeList, properties: Partial<IRadioNodeListProperties>) => void;
declare const RadioNodeListBaseClass: {
    new (): {
        [index: number]: import("../../base/interfaces/super").ISuperNode;
        readonly value: Promise<string>;
        readonly length: Promise<number>;
        item(index: number): import("../../base/interfaces/super").ISuperNode;
        forEach(callbackfn: (value: import("../../base/interfaces/super").ISuperNode, key: number, parent: import("../../base/interfaces/official").INodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, import("../../base/interfaces/super").ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<import("../../base/interfaces/super").ISuperNode>>;
        [Symbol.iterator](): Iterator<import("../../base/interfaces/super").ISuperNode, any, undefined>;
    };
};
export default class RadioNodeList extends RadioNodeListBaseClass implements IRadioNodeList {
    constructor();
}
export {};
