import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLBaseElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLBaseElement, IHTMLBaseElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLBaseElement>('HTMLBaseElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLBaseElement>(getState, setState, awaitedHandler);

export function HTMLBaseElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLBaseElement extends HTMLElement implements IHTMLBaseElement, PromiseLike<IHTMLBaseElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLBaseElement',
      });
    }

    // properties

    public get href(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'href', false);
    }

    public get target(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'target', false);
    }

    public then<TResult1 = IHTMLBaseElement, TResult2 = never>(onfulfilled?: ((value: IHTMLBaseElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLBaseElementPropertyKeys, HTMLBaseElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLBaseElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly href?: Promise<string>;
  readonly target?: Promise<string>;
}

export const HTMLBaseElementPropertyKeys = [...HTMLElementPropertyKeys, 'href', 'target'];

export const HTMLBaseElementConstantKeys = [...HTMLElementConstantKeys];
