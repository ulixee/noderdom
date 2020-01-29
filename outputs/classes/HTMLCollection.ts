import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLCollectionBase, IElement, IHTMLCollection } from '../interfaces';
import { IHTMLCollectionBaseProperties, IHTMLCollectionBaseReadonlyProperties } from './HTMLCollectionBase';

// tslint:disable-next-line:variable-name
export function HTMLCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>) {
  return class HTMLCollection<T extends IElement = IElement> extends HTMLCollectionBase implements IHTMLCollection<T> {
    public namedItem(name: string): T | null {
      return InternalHandler.run<IHTMLCollection<T>, T | null>(this, 'namedItem', [name]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLCollectionProperties extends IHTMLCollectionBaseProperties {}

export interface IHTMLCollectionReadonlyProperties extends IHTMLCollectionBaseReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLCollection } = InternalStateGenerator<
  IHTMLCollection,
  IHTMLCollectionProperties,
  IHTMLCollectionReadonlyProperties
>('HTMLCollection');
