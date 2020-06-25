import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { ISuperHTMLCollection, ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseIsolate, IHTMLCollectionIsolate, IHTMLOptionsCollectionIsolate } from '../interfaces/isolate';
import { IHTMLCollectionBaseIsolateProperties } from '../isolate-mixins/HTMLCollectionBaseIsolate';
import { IHTMLCollectionIsolateProperties } from '../isolate-mixins/HTMLCollectionIsolate';
import { IHTMLOptionsCollectionIsolateProperties } from '../isolate-mixins/HTMLOptionsCollectionIsolate';
export declare const getState: <C = ISuperHTMLCollection, P = ISuperHTMLCollectionProperties>(instance: C) => P, setState: <P = ISuperHTMLCollectionProperties>(instance: ISuperHTMLCollection, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<ISuperHTMLCollection>;
export declare const nodeAttacher: NodeAttacher<ISuperHTMLCollection>;
export declare const awaitedIterator: AwaitedIterator<ISuperHTMLCollection, ISuperElement>;
export declare function SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate: Constructable<IHTMLCollectionBaseIsolate>, HTMLCollectionIsolate: Constructable<IHTMLCollectionIsolate>, HTMLOptionsCollectionIsolate: Constructable<IHTMLOptionsCollectionIsolate>): {
    new (): {
        namedItem(name: string): ISuperElement;
        then<TResult1 = ISuperHTMLCollection, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLCollection) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
        readonly length: Promise<number>;
        item(index: number): Promise<ISuperElement | null>;
    };
};
export interface ISuperHTMLCollectionProperties extends IHTMLCollectionBaseIsolateProperties, IHTMLCollectionIsolateProperties, IHTMLOptionsCollectionIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const SuperHTMLCollectionPropertyKeys: string[];
export declare const SuperHTMLCollectionConstantKeys: never[];
