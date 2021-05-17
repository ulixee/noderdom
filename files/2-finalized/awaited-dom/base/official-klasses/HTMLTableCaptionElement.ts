import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLTableCaptionElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTableCaptionElement, IHTMLTableCaptionElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableCaptionElement>('HTMLTableCaptionElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLTableCaptionElement>(getState, setState, awaitedHandler);

export function HTMLTableCaptionElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableCaptionElement extends HTMLElement implements IHTMLTableCaptionElement, PromiseLike<IHTMLTableCaptionElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLTableCaptionElement',
      });
    }

    public then<TResult1 = IHTMLTableCaptionElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTableCaptionElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLTableCaptionElementPropertyKeys, HTMLTableCaptionElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableCaptionElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
}

export const HTMLTableCaptionElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLTableCaptionElementConstantKeys = [...HTMLElementConstantKeys];
