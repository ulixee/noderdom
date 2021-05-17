import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLSpanElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSpanElement, IHTMLSpanElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLSpanElement>('HTMLSpanElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLSpanElement>(getState, setState, awaitedHandler);

export function HTMLSpanElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSpanElement extends HTMLElement implements IHTMLSpanElement, PromiseLike<IHTMLSpanElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLSpanElement',
      });
    }

    public then<TResult1 = IHTMLSpanElement, TResult2 = never>(onfulfilled?: ((value: IHTMLSpanElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLSpanElementPropertyKeys, HTMLSpanElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSpanElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
}

export const HTMLSpanElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLSpanElementConstantKeys = [...HTMLElementConstantKeys];
