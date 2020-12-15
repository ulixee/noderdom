import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLParagraphElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLParagraphElement, IHTMLParagraphElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLParagraphElement>('HTMLParagraphElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLParagraphElement>(getState, setState, awaitedHandler);

export function HTMLParagraphElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLParagraphElement extends HTMLElement implements IHTMLParagraphElement, PromiseLike<IHTMLParagraphElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLParagraphElement>(this, HTMLParagraphElementConstantKeys, HTMLParagraphElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLParagraphElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public then<TResult1 = IHTMLParagraphElement, TResult2 = never>(onfulfilled?: ((value: IHTMLParagraphElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLParagraphElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
}

export const HTMLParagraphElementPropertyKeys = [...HTMLElementPropertyKeys, 'align'];

export const HTMLParagraphElementConstantKeys = [...HTMLElementConstantKeys];
