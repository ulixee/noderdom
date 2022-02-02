import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLOptionsCollection, IHTMLCollection } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IHTMLCollectionProperties } from './HTMLCollection';
export declare const getState: (instance: IHTMLOptionsCollection) => IHTMLOptionsCollectionProperties, setState: (instance: IHTMLOptionsCollection, properties: Partial<IHTMLOptionsCollectionProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLOptionsCollection>;
export declare function HTMLOptionsCollectionGenerator(HTMLCollection: Constructable<IHTMLCollection>): {
    new (): {
        [index: number]: ISuperElement;
        namedItem(name: string): ISuperElement;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
        [Symbol.iterator](): Iterator<ISuperElement, any, undefined>;
    };
};
export interface IHTMLOptionsCollectionProperties extends IHTMLCollectionProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLOptionsCollectionPropertyKeys: string[];
export declare const HTMLOptionsCollectionConstantKeys: never[];
