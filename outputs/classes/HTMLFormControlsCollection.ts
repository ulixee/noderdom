import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLCollectionBase, IRadioNodeList, IElement, IHTMLFormControlsCollection } from '../interfaces';
import { IHTMLCollectionBaseProperties, IHTMLCollectionBaseReadonlyProperties } from './HTMLCollectionBase';

// tslint:disable-next-line:variable-name
export function HTMLFormControlsCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>) {
  return class HTMLFormControlsCollection extends HTMLCollectionBase implements IHTMLFormControlsCollection {
    public namedItem(name: string): IRadioNodeList | IElement | null {
      return InternalHandler.run<IHTMLFormControlsCollection, IRadioNodeList | IElement | null>(this, 'namedItem', [name]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLFormControlsCollectionProperties extends IHTMLCollectionBaseProperties {}

export interface IHTMLFormControlsCollectionReadonlyProperties extends IHTMLCollectionBaseReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLFormControlsCollection } = InternalStateGenerator<
  IHTMLFormControlsCollection,
  IHTMLFormControlsCollectionProperties,
  IHTMLFormControlsCollectionReadonlyProperties
>('HTMLFormControlsCollection');
