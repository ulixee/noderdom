import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLFrameSetElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFrameSetElement, IHTMLFrameSetElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFrameSetElement>('HTMLFrameSetElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLFrameSetElement>(getState, setState, awaitedHandler);

export function HTMLFrameSetElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFrameSetElement extends HTMLElement implements IHTMLFrameSetElement, PromiseLike<IHTMLFrameSetElement> {
    constructor() {
      super();
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
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLFrameSetElementPropertyKeys, HTMLFrameSetElementConstantKeys);
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
