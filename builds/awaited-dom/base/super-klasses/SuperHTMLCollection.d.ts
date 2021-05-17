import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { ISuperHTMLCollection, ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseIsolate, IHTMLCollectionIsolate, IHTMLOptionsCollectionIsolate } from '../interfaces/isolate';
import { IHTMLCollectionBaseIsolateProperties } from '../isolate-mixins/HTMLCollectionBaseIsolate';
import { IHTMLCollectionIsolateProperties } from '../isolate-mixins/HTMLCollectionIsolate';
import { IHTMLOptionsCollectionIsolateProperties } from '../isolate-mixins/HTMLOptionsCollectionIsolate';
export declare const getState: (instance: ISuperHTMLCollection) => ISuperHTMLCollectionProperties, setState: (instance: ISuperHTMLCollection, properties: Partial<ISuperHTMLCollectionProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ISuperHTMLCollection>;
export declare const nodeFactory: NodeFactory<ISuperHTMLCollection>;
export declare const awaitedIterator: AwaitedIterator<ISuperHTMLCollection, ISuperElement>;
export declare function SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate: Constructable<IHTMLCollectionBaseIsolate>, HTMLCollectionIsolate: Constructable<IHTMLCollectionIsolate>, HTMLOptionsCollectionIsolate: Constructable<IHTMLOptionsCollectionIsolate>): {
    new (): {
        [index: number]: ISuperElement;
        namedItem(name: string): ISuperElement;
        then<TResult1 = ISuperHTMLCollection, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLCollection) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<ISuperElement>;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
    };
};
export interface ISuperHTMLCollectionProperties extends IHTMLCollectionBaseIsolateProperties, IHTMLCollectionIsolateProperties, IHTMLOptionsCollectionIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
}
export declare const SuperHTMLCollectionPropertyKeys: string[];
export declare const SuperHTMLCollectionConstantKeys: never[];
