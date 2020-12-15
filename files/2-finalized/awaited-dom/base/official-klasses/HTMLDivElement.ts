import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLDivElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDivElement, IHTMLDivElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDivElement>('HTMLDivElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLDivElement>(getState, setState, awaitedHandler);

export function HTMLDivElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDivElement extends HTMLElement implements IHTMLDivElement, PromiseLike<IHTMLDivElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLDivElement>(this, HTMLDivElementConstantKeys, HTMLDivElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLDivElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public then<TResult1 = IHTMLDivElement, TResult2 = never>(onfulfilled?: ((value: IHTMLDivElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDivElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
}

export const HTMLDivElementPropertyKeys = [...HTMLElementPropertyKeys, 'align'];

export const HTMLDivElementConstantKeys = [...HTMLElementConstantKeys];
