import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLSpanElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLSpanElement, IHTMLSpanElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLSpanElement>('HTMLSpanElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLSpanElement>(getState, setState, awaitedHandler);

export function HTMLSpanElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSpanElement extends HTMLElement implements IHTMLSpanElement, PromiseLike<IHTMLSpanElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLSpanElement>(this, HTMLSpanElementConstantKeys, HTMLSpanElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLSpanElement',
      });
    }

    public then<TResult1 = IHTMLSpanElement, TResult2 = never>(onfulfilled?: ((value: IHTMLSpanElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
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
