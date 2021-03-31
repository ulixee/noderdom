import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLHeadingElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHeadingElement, IHTMLHeadingElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHeadingElement>('HTMLHeadingElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLHeadingElement>(getState, setState, awaitedHandler);

export function HTMLHeadingElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHeadingElement extends HTMLElement implements IHTMLHeadingElement, PromiseLike<IHTMLHeadingElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLHeadingElement>(this, HTMLHeadingElementConstantKeys, HTMLHeadingElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLHeadingElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public then<TResult1 = IHTMLHeadingElement, TResult2 = never>(onfulfilled?: ((value: IHTMLHeadingElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadingElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
}

export const HTMLHeadingElementPropertyKeys = [...HTMLElementPropertyKeys, 'align'];

export const HTMLHeadingElementConstantKeys = [...HTMLElementConstantKeys];