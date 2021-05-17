import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { ISuperNodeList, ISuperNode } from '../interfaces/super';
import { INodeListIsolate, IRadioNodeListIsolate } from '../interfaces/isolate';
import { INodeListIsolateProperties } from '../isolate-mixins/NodeListIsolate';
import { IRadioNodeListIsolateProperties } from '../isolate-mixins/RadioNodeListIsolate';
export declare const getState: (instance: ISuperNodeList) => ISuperNodeListProperties, setState: (instance: ISuperNodeList, properties: Partial<ISuperNodeListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ISuperNodeList>;
export declare const nodeFactory: NodeFactory<ISuperNodeList>;
export declare const awaitedIterator: AwaitedIterator<ISuperNodeList, ISuperNode>;
export declare function SuperNodeListGenerator(NodeListIsolate: Constructable<INodeListIsolate>, RadioNodeListIsolate: Constructable<IRadioNodeListIsolate>): {
    new (): {
        [index: number]: ISuperNode;
        readonly length: Promise<number>;
        item(index: number): ISuperNode;
        then<TResult1 = ISuperNodeList, TResult2 = never>(onfulfilled?: ((value: ISuperNodeList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        forEach(callbackfn: (value: ISuperNode, key: number, parent: ISuperNodeList) => void, thisArg?: any): Promise<void>;
        entries(): Promise<IterableIterator<[number, ISuperNode]>>;
        keys(): Promise<IterableIterator<number>>;
        values(): Promise<IterableIterator<ISuperNode>>;
        [Symbol.iterator](): Iterator<ISuperNode>;
        readonly value: Promise<string>;
    };
};
export interface ISuperNodeListProperties extends INodeListIsolateProperties, IRadioNodeListIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const SuperNodeListPropertyKeys: string[];
export declare const SuperNodeListConstantKeys: never[];
