import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLDirectoryElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDirectoryElement, IHTMLDirectoryElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDirectoryElement>('HTMLDirectoryElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLDirectoryElement>(getState, setState, awaitedHandler);

export function HTMLDirectoryElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDirectoryElement extends HTMLElement implements IHTMLDirectoryElement, PromiseLike<IHTMLDirectoryElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLDirectoryElement',
      });
    }

    // properties

    public get compact(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'compact', false);
    }

    public then<TResult1 = IHTMLDirectoryElement, TResult2 = never>(onfulfilled?: ((value: IHTMLDirectoryElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLDirectoryElementPropertyKeys, HTMLDirectoryElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDirectoryElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly compact?: Promise<boolean>;
}

export const HTMLDirectoryElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact'];

export const HTMLDirectoryElementConstantKeys = [...HTMLElementConstantKeys];
