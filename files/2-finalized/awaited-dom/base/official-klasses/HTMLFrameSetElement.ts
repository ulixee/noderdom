import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLFrameSetElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFrameSetElement, IHTMLFrameSetElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFrameSetElement>('HTMLFrameSetElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLFrameSetElement>(getState, setState, awaitedHandler);

export function HTMLFrameSetElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFrameSetElement extends HTMLElement implements IHTMLFrameSetElement, PromiseLike<IHTMLFrameSetElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLFrameSetElement>(this, HTMLFrameSetElementConstantKeys, HTMLFrameSetElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLFrameSetElement',
      });
    }

    // properties

    public get cols(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cols', false);
    }

    public get rows(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'rows', false);
    }

    public then<TResult1 = IHTMLFrameSetElement, TResult2 = never>(onfulfilled?: ((value: IHTMLFrameSetElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFrameSetElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly cols?: Promise<string>;
  readonly rows?: Promise<string>;
}

export const HTMLFrameSetElementPropertyKeys = [...HTMLElementPropertyKeys, 'cols', 'rows'];

export const HTMLFrameSetElementConstantKeys = [...HTMLElementConstantKeys];