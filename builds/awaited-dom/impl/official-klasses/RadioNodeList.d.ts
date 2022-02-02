import { IRadioNodeList } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { IRadioNodeListProperties } from '../../base/official-klasses/RadioNodeList';
export declare const getState: (instance: IRadioNodeList) => IRadioNodeListProperties, setState: (instance: IRadioNodeList, properties: Partial<IRadioNodeListProperties>) => void;
declare const RadioNodeListBaseClass: {
    new (): {
        [index: number]: ISuperNode;
        readonly value: Promise<string>;
        readonly length: Promise<number>;
        item(index: number): ISuperNode;
        forEach(callbackfn: (value: ISuperNode, key: number, parent: import("../../base/interfaces/official").INodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<ISuperNode>>;
        [Symbol.iterator](): Iterator<ISuperNode, any, undefined>;
    };
};
export default class RadioNodeList extends RadioNodeListBaseClass implements IRadioNodeList {
    constructor();
}
export {};
