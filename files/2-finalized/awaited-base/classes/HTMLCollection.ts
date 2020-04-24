// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IHTMLCollection, IElement } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLCollection } = StateMachine<
  IHTMLCollection,
  IHTMLCollectionProperties,
  IHTMLCollectionReadonlyProperties
>('HTMLCollection');

export const awaitedHandler = new AwaitedHandler<IHTMLCollection>('HTMLCollection', getState, setState);

export default class HTMLCollection implements IHTMLCollection {
  constructor() {
    initializeConstantsAndProperties<HTMLCollection>(HTMLCollection, this, HTMLCollectionConstantKeys, HTMLCollectionPropertyKeys);
  }

  // methods

  public namedItem(name: string): IElement {
    throw new Error('HTMLCollection.namedItem not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionReadonlyProperties {}

export interface IHTMLCollectionProperties extends IHTMLCollectionReadonlyProperties {}

export const HTMLCollectionPropertyKeys = [];

export const HTMLCollectionConstantKeys = [];
