import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLMeterElement, IHTMLElement } from '../interfaces/official';
import { ISuperNodeList } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMeterElement, IHTMLMeterElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLMeterElement>('HTMLMeterElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLMeterElement>(getState, setState, awaitedHandler);

export function HTMLMeterElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMeterElement extends HTMLElement implements IHTMLMeterElement, PromiseLike<IHTMLMeterElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLMeterElement>(this, HTMLMeterElementConstantKeys, HTMLMeterElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLMeterElement',
      });
    }

    // properties

    public get high(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'high', false);
    }

    public get labels(): ISuperNodeList {
      throw new Error('HTMLMeterElement.labels getter not implemented');
    }

    public get low(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'low', false);
    }

    public get max(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'max', false);
    }

    public get min(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'min', false);
    }

    public get optimum(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'optimum', false);
    }

    public get value(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'value', false);
    }

    public then<TResult1 = IHTMLMeterElement, TResult2 = never>(onfulfilled?: ((value: IHTMLMeterElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLMeterElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly high?: Promise<number>;
  readonly labels?: ISuperNodeList;
  readonly low?: Promise<number>;
  readonly max?: Promise<number>;
  readonly min?: Promise<number>;
  readonly optimum?: Promise<number>;
  readonly value?: Promise<number>;
}

export const HTMLMeterElementPropertyKeys = [...HTMLElementPropertyKeys, 'high', 'labels', 'low', 'max', 'min', 'optimum', 'value'];

export const HTMLMeterElementConstantKeys = [...HTMLElementConstantKeys];
