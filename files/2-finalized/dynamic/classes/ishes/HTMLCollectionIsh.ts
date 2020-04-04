import Handler, { initializeConstantsAndPrototypes } from '../../DynamicHandler';
import StateMachine from '../../StateMachine';
import { IHTMLCollectionIsh } from '../../interfaces/ishes';
// tslint:disable:variable-name

export const { getState, setState, setHiddenState, setReadonlyOfHTMLCollectionIsh } = StateMachine<
  IHTMLCollectionIsh,
  IHTMLCollectionIshProperties,
  IHTMLCollectionIshReadonlyProperties
>('HTMLCollectionIsh');

export const handler = new Handler<IHTMLCollectionIsh>('HTMLCollectionIsh', getState, setState);

export default class HTMLCollectionIsh implements IHTMLCollectionIsh {
  constructor() {
    initializeConstantsAndPrototypes<HTMLCollectionIsh>(HTMLCollectionIsh, this, handler, HTMLCollectionIshConstantKeys, HTMLCollectionIshPropertyKeys);
  }
}
// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLCollectionIshReadonlyProperties {}

export interface IHTMLCollectionIshProperties extends IHTMLCollectionIshReadonlyProperties {}

export const HTMLCollectionIshPropertyKeys = [];

export const HTMLCollectionIshConstantKeys = [];
