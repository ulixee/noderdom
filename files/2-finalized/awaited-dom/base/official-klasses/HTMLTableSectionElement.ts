import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLTableSectionElement, IHTMLElement } from '../interfaces/official';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableSectionElement, IHTMLTableSectionElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableSectionElement>('HTMLTableSectionElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLTableSectionElement>(getState, setState, awaitedHandler);

export function HTMLTableSectionElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableSectionElement extends HTMLElement implements IHTMLTableSectionElement, PromiseLike<IHTMLTableSectionElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLTableSectionElement>(this, HTMLTableSectionElementConstantKeys, HTMLTableSectionElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLTableSectionElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public get ch(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'ch', false);
    }

    public get chOff(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'chOff', false);
    }

    public get rows(): ISuperHTMLCollection {
      throw new Error('HTMLTableSectionElement.rows getter not implemented');
    }

    public get vAlign(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'vAlign', false);
    }

    public then<TResult1 = IHTMLTableSectionElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTableSectionElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableSectionElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
  readonly ch?: Promise<string>;
  readonly chOff?: Promise<string>;
  readonly rows?: ISuperHTMLCollection;
  readonly vAlign?: Promise<string>;
}

export const HTMLTableSectionElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'ch', 'chOff', 'rows', 'vAlign'];

export const HTMLTableSectionElementConstantKeys = [...HTMLElementConstantKeys];