import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLMetaElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMetaElement, IHTMLMetaElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLMetaElement>('HTMLMetaElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLMetaElement>(getState, setState, awaitedHandler);

export function HTMLMetaElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMetaElement extends HTMLElement implements IHTMLMetaElement, PromiseLike<IHTMLMetaElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLMetaElement>(this, HTMLMetaElementConstantKeys, HTMLMetaElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLMetaElement',
      });
    }

    // properties

    public get content(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'content', false);
    }

    public get httpEquiv(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'httpEquiv', false);
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public get scheme(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'scheme', false);
    }

    public then<TResult1 = IHTMLMetaElement, TResult2 = never>(onfulfilled?: ((value: IHTMLMetaElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLMetaElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly content?: Promise<string>;
  readonly httpEquiv?: Promise<string>;
  readonly name?: Promise<string>;
  readonly scheme?: Promise<string>;
}

export const HTMLMetaElementPropertyKeys = [...HTMLElementPropertyKeys, 'content', 'httpEquiv', 'name', 'scheme'];

export const HTMLMetaElementConstantKeys = [...HTMLElementConstantKeys];
