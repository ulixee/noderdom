import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLParamElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLParamElement, IHTMLParamElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLParamElement>('HTMLParamElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLParamElement>(getState, setState, awaitedHandler);

export function HTMLParamElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLParamElement extends HTMLElement implements IHTMLParamElement, PromiseLike<IHTMLParamElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLParamElement',
      });
    }

    // properties

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public get value(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'value', false);
    }

    public get valueType(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'valueType', false);
    }

    public then<TResult1 = IHTMLParamElement, TResult2 = never>(onfulfilled?: ((value: IHTMLParamElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLParamElementPropertyKeys, HTMLParamElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLParamElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly name?: Promise<string>;
  readonly type?: Promise<string>;
  readonly value?: Promise<string>;
  readonly valueType?: Promise<string>;
}

export const HTMLParamElementPropertyKeys = [...HTMLElementPropertyKeys, 'name', 'type', 'value', 'valueType'];

export const HTMLParamElementConstantKeys = [...HTMLElementConstantKeys];
