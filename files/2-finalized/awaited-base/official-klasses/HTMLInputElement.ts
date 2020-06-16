import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLInputElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElement, IHTMLInputElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLInputElement>('HTMLInputElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLInputElement>('createHTMLInputElement', getState, setState, awaitedHandler);

export function HTMLInputElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLInputElement extends HTMLElement implements IHTMLInputElement, PromiseLike<IHTMLInputElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLInputElement>(this, HTMLInputElementConstantKeys, HTMLInputElementPropertyKeys);
    }

    // methods

    public select(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'select', []);
    }

    public then<TResult1 = IHTMLInputElement, TResult2 = never>(onfulfilled?: ((value: IHTMLInputElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLInputElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLInputElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLInputElementConstantKeys = [...HTMLElementConstantKeys];
