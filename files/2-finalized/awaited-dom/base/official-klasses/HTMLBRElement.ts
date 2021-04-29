import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLBRElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLBRElement, IHTMLBRElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLBRElement>('HTMLBRElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLBRElement>(getState, setState, awaitedHandler);

export function HTMLBRElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLBRElement extends HTMLElement implements IHTMLBRElement, PromiseLike<IHTMLBRElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLBRElement>(this, HTMLBRElementConstantKeys, HTMLBRElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLBRElement',
      });
    }

    public then<TResult1 = IHTMLBRElement, TResult2 = never>(onfulfilled?: ((value: IHTMLBRElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLBRElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
}

export const HTMLBRElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLBRElementConstantKeys = [...HTMLElementConstantKeys];
