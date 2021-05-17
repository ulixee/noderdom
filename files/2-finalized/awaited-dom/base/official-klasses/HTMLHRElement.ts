import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLHRElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHRElement, IHTMLHRElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHRElement>('HTMLHRElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLHRElement>(getState, setState, awaitedHandler);

export function HTMLHRElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHRElement extends HTMLElement implements IHTMLHRElement, PromiseLike<IHTMLHRElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLHRElement',
      });
    }

    public then<TResult1 = IHTMLHRElement, TResult2 = never>(onfulfilled?: ((value: IHTMLHRElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLHRElementPropertyKeys, HTMLHRElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHRElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
}

export const HTMLHRElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLHRElementConstantKeys = [...HTMLElementConstantKeys];
