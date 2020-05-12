import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLInputElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElement, IHTMLInputElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLInputElement>('HTMLInputElement', getState, setState);

export function HTMLInputElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLInputElement extends HTMLElement implements IHTMLInputElement {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLInputElement>(this, HTMLInputElementConstantKeys, HTMLInputElementPropertyKeys);
    }

    // methods

    public select(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'select', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLInputElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLInputElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLInputElementConstantKeys = [...HTMLElementConstantKeys];
