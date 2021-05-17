import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLOptionsCollection, IHTMLCollection } from '../interfaces/official';
import { IHTMLCollectionProperties } from './HTMLCollection';
export declare const getState: (instance: IHTMLOptionsCollection) => IHTMLOptionsCollectionProperties, setState: (instance: IHTMLOptionsCollection, properties: Partial<IHTMLOptionsCollectionProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOptionsCollection>;
export declare function HTMLOptionsCollectionGenerator(HTMLCollection: Constructable<IHTMLCollection>): {
    new (): {
        [index: number]: import("../interfaces/super").ISuperElement;
        namedItem(name: string): import("../interfaces/super").ISuperElement;
        readonly length: Promise<number>;
        item(index: number): import("../interfaces/super").ISuperElement;
        [Symbol.iterator](): Iterator<import("../interfaces/super").ISuperElement, any, undefined>;
    };
};
export interface IHTMLOptionsCollectionProperties extends IHTMLCollectionProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLOptionsCollectionPropertyKeys: string[];
export declare const HTMLOptionsCollectionConstantKeys: never[];
