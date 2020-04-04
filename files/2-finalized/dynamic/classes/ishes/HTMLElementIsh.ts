import Handler, { initializeConstantsAndPrototypes } from '../../DynamicHandler';
import StateMachine from '../../StateMachine';
import { IHTMLElementIsh } from '../../interfaces/ishes';
// tslint:disable:variable-name

export const { getState, setState, setHiddenState, setReadonlyOfHTMLElementIsh } = StateMachine<
  IHTMLElementIsh,
  IHTMLElementIshProperties,
  IHTMLElementIshReadonlyProperties
>('HTMLElementIsh');

export const handler = new Handler<IHTMLElementIsh>('HTMLElementIsh', getState, setState);

export default class HTMLElementIsh implements IHTMLElementIsh {
  constructor() {
    initializeConstantsAndPrototypes<HTMLElementIsh>(HTMLElementIsh, this, handler, HTMLElementIshConstantKeys, HTMLElementIshPropertyKeys);
  }
}
// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLElementIshReadonlyProperties {}

export interface IHTMLElementIshProperties extends IHTMLElementIshReadonlyProperties {}

export const HTMLElementIshPropertyKeys = [];

export const HTMLElementIshConstantKeys = [];
