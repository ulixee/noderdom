import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLOptionsCollection, IHTMLCollection } from '../interfaces/official';
import { IHTMLCollectionProperties } from './HTMLCollection';
export declare const getState: <C = IHTMLOptionsCollection, P = IHTMLOptionsCollectionProperties>(instance: C) => P, setState: <P = IHTMLOptionsCollectionProperties>(instance: IHTMLOptionsCollection, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOptionsCollection>;
export declare function HTMLOptionsCollectionGenerator(HTMLCollection: Constructable<IHTMLCollection>): {
    new (): {
        namedItem(name: string): import("../interfaces/super").ISuperElement;
        readonly length: Promise<number>;
        item(index: number): Promise<import("../interfaces/super").ISuperElement | null>;
        [Symbol.iterator](): IterableIterator<import("../interfaces/super").ISuperElement>;
    };
};
export interface IHTMLOptionsCollectionProperties extends IHTMLCollectionProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLOptionsCollectionPropertyKeys: string[];
export declare const HTMLOptionsCollectionConstantKeys: never[];
