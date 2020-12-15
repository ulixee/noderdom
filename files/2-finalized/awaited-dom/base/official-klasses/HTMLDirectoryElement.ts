import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLDirectoryElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDirectoryElement, IHTMLDirectoryElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDirectoryElement>('HTMLDirectoryElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLDirectoryElement>(getState, setState, awaitedHandler);

export function HTMLDirectoryElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDirectoryElement extends HTMLElement implements IHTMLDirectoryElement, PromiseLike<IHTMLDirectoryElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLDirectoryElement>(this, HTMLDirectoryElementConstantKeys, HTMLDirectoryElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLDirectoryElement',
      });
    }

    // properties

    public get compact(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'compact', false);
    }

    public then<TResult1 = IHTMLDirectoryElement, TResult2 = never>(onfulfilled?: ((value: IHTMLDirectoryElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
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
