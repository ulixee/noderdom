import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLCollection, IHTMLOptionElement, IHTMLOptGroupElement, IHTMLElement, IHTMLOptionsCollection } from '../interfaces';
import { IHTMLCollectionProperties, IHTMLCollectionReadonlyProperties } from './HTMLCollection';

// tslint:disable-next-line:variable-name
export function HTMLOptionsCollectionGenerator(HTMLCollection: Constructable<IHTMLCollection>) {
  return class HTMLOptionsCollection extends HTMLCollection implements IHTMLOptionsCollection {
    public get length(): number {
      return InternalHandler.get<IHTMLOptionsCollection, number>(this, 'length');
    }

    public set length(value: number) {
      InternalHandler.set<IHTMLOptionsCollection, number>(this, 'length', value);
    }

    public get selectedIndex(): number {
      return InternalHandler.get<IHTMLOptionsCollection, number>(this, 'selectedIndex');
    }

    public set selectedIndex(value: number) {
      InternalHandler.set<IHTMLOptionsCollection, number>(this, 'selectedIndex', value);
    }

    // methods

    public add(element: IHTMLOptionElement | IHTMLOptGroupElement, before?: IHTMLElement | number | null): void {
      InternalHandler.run<IHTMLOptionsCollection, void>(this, 'add', [element, before]);
    }

    public remove(index: number): void {
      InternalHandler.run<IHTMLOptionsCollection, void>(this, 'remove', [index]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLOptionsCollectionProperties extends IHTMLCollectionProperties {
  length?: number;
  selectedIndex?: number;
}

export interface IHTMLOptionsCollectionReadonlyProperties extends IHTMLCollectionReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLOptionsCollection } = InternalStateGenerator<
  IHTMLOptionsCollection,
  IHTMLOptionsCollectionProperties,
  IHTMLOptionsCollectionReadonlyProperties
>('HTMLOptionsCollection');
