import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLCollection, IHTMLCollectionBase } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseProperties } from './HTMLCollectionBase';
export declare const getState: (instance: IHTMLCollection) => IHTMLCollectionProperties, setState: (instance: IHTMLCollection, properties: Partial<IHTMLCollectionProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLCollection>;
export declare function HTMLCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>): {
    new (): {
        [index: number]: ISuperElement;
        namedItem(name: string): ISuperElement;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
        [Symbol.iterator](): Iterator<ISuperElement, any, undefined>;
    };
};
export interface IHTMLCollectionProperties extends IHTMLCollectionBaseProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLCollectionPropertyKeys: string[];
export declare const HTMLCollectionConstantKeys: never[];
