import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLTableElement, IHTMLElement, IHTMLTableCaptionElement, IHTMLTableSectionElement } from '../interfaces/official';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableElement, IHTMLTableElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableElement>('HTMLTableElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLTableElement>(getState, setState, awaitedHandler);

export function HTMLTableElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableElement extends HTMLElement implements IHTMLTableElement, PromiseLike<IHTMLTableElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLTableElement>(this, HTMLTableElementConstantKeys, HTMLTableElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLTableElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public get bgColor(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'bgColor', false);
    }

    public get border(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'border', false);
    }

    public get caption(): IHTMLTableCaptionElement {
      throw new Error('HTMLTableElement.caption getter not implemented');
    }

    public get cellPadding(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cellPadding', false);
    }

    public get cellSpacing(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cellSpacing', false);
    }

    public get frame(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'frame', false);
    }

    public get rows(): ISuperHTMLCollection {
      throw new Error('HTMLTableElement.rows getter not implemented');
    }

    public get rules(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'rules', false);
    }

    public get summary(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'summary', false);
    }

    public get tBodies(): ISuperHTMLCollection {
      throw new Error('HTMLTableElement.tBodies getter not implemented');
    }

    public get tFoot(): IHTMLTableSectionElement {
      throw new Error('HTMLTableElement.tFoot getter not implemented');
    }

    public get tHead(): IHTMLTableSectionElement {
      throw new Error('HTMLTableElement.tHead getter not implemented');
    }

    public get width(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'width', false);
    }

    public then<TResult1 = IHTMLTableElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTableElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
  readonly bgColor?: Promise<string>;
  readonly border?: Promise<string>;
  readonly caption?: IHTMLTableCaptionElement;
  readonly cellPadding?: Promise<string>;
  readonly cellSpacing?: Promise<string>;
  readonly frame?: Promise<string>;
  readonly rows?: ISuperHTMLCollection;
  readonly rules?: Promise<string>;
  readonly summary?: Promise<string>;
  readonly tBodies?: ISuperHTMLCollection;
  readonly tFoot?: IHTMLTableSectionElement;
  readonly tHead?: IHTMLTableSectionElement;
  readonly width?: Promise<string>;
}

export const HTMLTableElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'bgColor', 'border', 'caption', 'cellPadding', 'cellSpacing', 'frame', 'rows', 'rules', 'summary', 'tBodies', 'tFoot', 'tHead', 'width'];

export const HTMLTableElementConstantKeys = [...HTMLElementConstantKeys];
