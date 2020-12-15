import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLPreElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLPreElement, IHTMLPreElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLPreElement>('HTMLPreElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLPreElement>(getState, setState, awaitedHandler);

export function HTMLPreElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLPreElement extends HTMLElement implements IHTMLPreElement, PromiseLike<IHTMLPreElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLPreElement>(this, HTMLPreElementConstantKeys, HTMLPreElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLPreElement',
      });
    }

    // properties

    public get width(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'width', false);
    }

    public then<TResult1 = IHTMLPreElement, TResult2 = never>(onfulfilled?: ((value: IHTMLPreElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLPreElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly width?: Promise<number>;
}

export const HTMLPreElementPropertyKeys = [...HTMLElementPropertyKeys, 'width'];

export const HTMLPreElementConstantKeys = [...HTMLElementConstantKeys];
