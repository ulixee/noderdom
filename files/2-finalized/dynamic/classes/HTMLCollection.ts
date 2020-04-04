import Handler, { initializeConstantsAndPrototypes } from '../DynamicHandler';
import StateMachine from '../StateMachine';
import { IHTMLCollection } from '../interfaces/dom';
// tslint:disable:variable-name

export const { getState, setState, setHiddenState, setReadonlyOfHTMLCollection } = StateMachine<
  IHTMLCollection,
  IHTMLCollectionProperties,
  IHTMLCollectionReadonlyProperties
>('HTMLCollection');

export const handler = new Handler<IHTMLCollection>('HTMLCollection', getState, setState);

export default class HTMLCollection implements IHTMLCollection {
  constructor() {
    initializeConstantsAndPrototypes<HTMLCollection>(HTMLCollection, this, handler, HTMLCollectionConstantKeys, HTMLCollectionPropertyKeys);
  }
}
// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLCollectionReadonlyProperties {}

export interface IHTMLCollectionProperties extends IHTMLCollectionReadonlyProperties {}

export const HTMLCollectionPropertyKeys = [];

export const HTMLCollectionConstantKeys = [];
