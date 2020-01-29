import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IElement, IHTMLCollectionBase } from '../interfaces';

export default class HTMLCollectionBase implements IHTMLCollectionBase {
  public get length(): number {
    return InternalHandler.get<IHTMLCollectionBase, number>(this, 'length');
  }

  // methods

  public item(index: number): IElement | null {
    return InternalHandler.run<IHTMLCollectionBase, IElement | null>(this, 'item', [index]);
  }

  [index: number]: IElement;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLCollectionBaseProperties {
  length?: number;
}

export interface IHTMLCollectionBaseReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfHTMLCollectionBase } = InternalStateGenerator<
  IHTMLCollectionBase,
  IHTMLCollectionBaseProperties,
  IHTMLCollectionBaseReadonlyProperties
>('HTMLCollectionBase');
