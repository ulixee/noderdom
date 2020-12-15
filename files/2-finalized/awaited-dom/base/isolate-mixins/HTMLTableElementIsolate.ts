import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableElementIsolate } from '../interfaces/isolate';
import { IHTMLTableCaptionElement, IHTMLTableSectionElement } from '../interfaces/official';
import { ISuperHTMLCollection } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableElementIsolate, IHTMLTableElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableElementIsolate>('HTMLTableElementIsolate', getState, setState);

export default class HTMLTableElementIsolate implements IHTMLTableElementIsolate {
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
    throw new Error('HTMLTableElementIsolate.caption getter not implemented');
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

  public get rows(): Promise<string> | ISuperHTMLCollection | Promise<number> {
    throw new Error('HTMLTableElementIsolate.rows getter not implemented');
  }

  public get rules(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'rules', false);
  }

  public get summary(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'summary', false);
  }

  public get tBodies(): ISuperHTMLCollection {
    throw new Error('HTMLTableElementIsolate.tBodies getter not implemented');
  }

  public get tFoot(): IHTMLTableSectionElement {
    throw new Error('HTMLTableElementIsolate.tFoot getter not implemented');
  }

  public get tHead(): IHTMLTableSectionElement {
    throw new Error('HTMLTableElementIsolate.tHead getter not implemented');
  }

  public get width(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'width', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly align?: Promise<string>;
  readonly bgColor?: Promise<string>;
  readonly border?: Promise<string>;
  readonly caption?: IHTMLTableCaptionElement;
  readonly cellPadding?: Promise<string>;
  readonly cellSpacing?: Promise<string>;
  readonly frame?: Promise<string>;
  readonly rows?: Promise<string> | ISuperHTMLCollection | Promise<number>;
  readonly rules?: Promise<string>;
  readonly summary?: Promise<string>;
  readonly tBodies?: ISuperHTMLCollection;
  readonly tFoot?: IHTMLTableSectionElement;
  readonly tHead?: IHTMLTableSectionElement;
  readonly width?: Promise<number> | Promise<string>;
}

export const HTMLTableElementIsolatePropertyKeys = ['align', 'bgColor', 'border', 'caption', 'cellPadding', 'cellSpacing', 'frame', 'rows', 'rules', 'summary', 'tBodies', 'tFoot', 'tHead', 'width'];

export const HTMLTableElementIsolateConstantKeys = [];
