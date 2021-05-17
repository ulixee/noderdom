import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLDivElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDivElement, IHTMLDivElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDivElement>('HTMLDivElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLDivElement>(getState, setState, awaitedHandler);

export function HTMLDivElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDivElement extends HTMLElement implements IHTMLDivElement, PromiseLike<IHTMLDivElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLDivElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public then<TResult1 = IHTMLDivElement, TResult2 = never>(onfulfilled?: ((value: IHTMLDivElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLDivElementPropertyKeys, HTMLDivElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDivElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
}

export const HTMLDivElementPropertyKeys = [...HTMLElementPropertyKeys, 'align'];

export const HTMLDivElementConstantKeys = [...HTMLElementConstantKeys];
