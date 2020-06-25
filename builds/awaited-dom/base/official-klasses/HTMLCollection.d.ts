import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLCollection, IHTMLCollectionBase } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseProperties } from './HTMLCollectionBase';
export declare const getState: <C = IHTMLCollection, P = IHTMLCollectionProperties>(instance: C) => P, setState: <P = IHTMLCollectionProperties>(instance: IHTMLCollection, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLCollection>;
export declare function HTMLCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>): {
    new (): {
        namedItem(name: string): ISuperElement;
        readonly length: Promise<number>;
        item(index: number): Promise<ISuperElement | null>;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
    };
};
export interface IHTMLCollectionProperties extends IHTMLCollectionBaseProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLCollectionPropertyKeys: string[];
export declare const HTMLCollectionConstantKeys: never[];
