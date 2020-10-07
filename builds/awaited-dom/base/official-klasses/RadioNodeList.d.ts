import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IRadioNodeList, INodeList } from '../interfaces/official';
import { INodeListProperties } from './NodeList';
export declare const getState: (instance: IRadioNodeList) => IRadioNodeListProperties, setState: (instance: IRadioNodeList, properties: Partial<IRadioNodeListProperties>) => void, recordProxy: (proxy: IRadioNodeList, instance: IRadioNodeList) => void;
export declare const awaitedHandler: AwaitedHandler<IRadioNodeList>;
export declare function RadioNodeListGenerator(NodeList: Constructable<INodeList>): {
    new (): {
        [index: number]: import("../interfaces/super").ISuperNode;
        readonly value: Promise<string>;
        readonly length: Promise<number>;
        item(index: number): import("../interfaces/super").ISuperNode;
        forEach(callbackfn: (value: import("../interfaces/super").ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, import("../interfaces/super").ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<import("../interfaces/super").ISuperNode>>;
        [Symbol.iterator](): IterableIterator<import("../interfaces/super").ISuperNode>;
    };
};
export interface IRadioNodeListProperties extends INodeListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly value?: Promise<string>;
}
export declare const RadioNodeListPropertyKeys: string[];
export declare const RadioNodeListConstantKeys: never[];
