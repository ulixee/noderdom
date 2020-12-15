import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLAnchorElement, IHTMLElement, IDOMTokenList } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLAnchorElement, IHTMLAnchorElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLAnchorElement>('HTMLAnchorElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLAnchorElement>(getState, setState, awaitedHandler);

export function HTMLAnchorElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLAnchorElement extends HTMLElement implements IHTMLAnchorElement, PromiseLike<IHTMLAnchorElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLAnchorElement>(this, HTMLAnchorElementConstantKeys, HTMLAnchorElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLAnchorElement',
      });
    }

    // properties

    public get download(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'download', false);
    }

    public get hreflang(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'hreflang', false);
    }

    public get referrerPolicy(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
    }

    public get rel(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'rel', false);
    }

    public get relList(): IDOMTokenList {
      throw new Error('HTMLAnchorElement.relList getter not implemented');
    }

    public get target(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'target', false);
    }

    public get text(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'text', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLAnchorElement, TResult2 = never>(onfulfilled?: ((value: IHTMLAnchorElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAnchorElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly download?: Promise<string>;
  readonly hreflang?: Promise<string>;
  readonly referrerPolicy?: Promise<string>;
  readonly rel?: Promise<string>;
  readonly relList?: IDOMTokenList;
  readonly target?: Promise<string>;
  readonly text?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLAnchorElementPropertyKeys = [...HTMLElementPropertyKeys, 'download', 'hreflang', 'referrerPolicy', 'rel', 'relList', 'target', 'text', 'type'];

export const HTMLAnchorElementConstantKeys = [...HTMLElementConstantKeys];
