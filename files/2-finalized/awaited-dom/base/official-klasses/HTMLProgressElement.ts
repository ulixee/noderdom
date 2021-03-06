import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLProgressElement, IHTMLElement } from '../interfaces/official';
import { ISuperNodeList } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLProgressElement, IHTMLProgressElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLProgressElement>('HTMLProgressElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLProgressElement>(getState, setState, awaitedHandler);

export function HTMLProgressElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLProgressElement extends HTMLElement implements IHTMLProgressElement, PromiseLike<IHTMLProgressElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLProgressElement',
      });
    }

    // properties

    public get labels(): ISuperNodeList {
      throw new Error('HTMLProgressElement.labels getter not implemented');
    }

    public get max(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'max', false);
    }

    public get position(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'position', false);
    }

    public get value(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'value', false);
    }

    public then<TResult1 = IHTMLProgressElement, TResult2 = never>(onfulfilled?: ((value: IHTMLProgressElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLProgressElementPropertyKeys, HTMLProgressElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLProgressElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly labels?: ISuperNodeList;
  readonly max?: Promise<number>;
  readonly position?: Promise<number>;
  readonly value?: Promise<number>;
}

export const HTMLProgressElementPropertyKeys = [...HTMLElementPropertyKeys, 'labels', 'max', 'position', 'value'];

export const HTMLProgressElementConstantKeys = [...HTMLElementConstantKeys];
