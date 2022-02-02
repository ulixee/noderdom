import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IRadioNodeList, INodeList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
import { INodeListProperties } from './NodeList';
export declare const getState: (instance: IRadioNodeList) => IRadioNodeListProperties, setState: (instance: IRadioNodeList, properties: Partial<IRadioNodeListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IRadioNodeList>;
export declare function RadioNodeListGenerator(NodeList: Constructable<INodeList>): {
    new (): {
        [index: number]: ISuperNode;
        readonly value: Promise<string>;
        readonly length: Promise<number>;
        item(index: number): ISuperNode;
        forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<ISuperNode>>;
        [Symbol.iterator](): Iterator<ISuperNode, any, undefined>;
    };
};
export interface IRadioNodeListProperties extends INodeListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly value?: Promise<string>;
}
export declare const RadioNodeListPropertyKeys: string[];
export declare const RadioNodeListConstantKeys: never[];
