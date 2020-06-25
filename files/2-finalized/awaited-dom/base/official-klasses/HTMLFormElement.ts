import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLFormElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFormElement, IHTMLFormElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFormElement>('HTMLFormElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLFormElement>(getState, setState, awaitedHandler);

export function HTMLFormElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFormElement extends HTMLElement implements IHTMLFormElement, PromiseLike<IHTMLFormElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLFormElement>(this, HTMLFormElementConstantKeys, HTMLFormElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLFormElement',
      });
    }

    public then<TResult1 = IHTMLFormElement, TResult2 = never>(onfulfilled?: ((value: IHTMLFormElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFormElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLFormElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLFormElementConstantKeys = [...HTMLElementConstantKeys];
