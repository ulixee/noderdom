import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLFormControlsCollection, IHTMLCollectionBase, IRadioNodeList } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseProperties } from './HTMLCollectionBase';
export declare const getState: (instance: IHTMLFormControlsCollection) => IHTMLFormControlsCollectionProperties, setState: (instance: IHTMLFormControlsCollection, properties: Partial<IHTMLFormControlsCollectionProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLFormControlsCollection>;
export declare function HTMLFormControlsCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>): {
    new (): {
        [index: number]: ISuperElement;
        namedItem(name: string): Promise<IRadioNodeList | ISuperElement | null>;
        readonly length: Promise<number>;
        item(index: number): ISuperElement;
        [Symbol.iterator](): Iterator<ISuperElement, any, undefined>;
    };
};
export interface IHTMLFormControlsCollectionProperties extends IHTMLCollectionBaseProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLFormControlsCollectionPropertyKeys: string[];
export declare const HTMLFormControlsCollectionConstantKeys: never[];
