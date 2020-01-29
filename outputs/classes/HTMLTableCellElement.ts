import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTableCellElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLTableCellElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableCellElement extends HTMLElement implements IHTMLTableCellElement {
    public get abbr(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'abbr');
    }

    public set abbr(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'abbr', value);
    }

    public get align(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'align', value);
    }

    public get axis(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'axis');
    }

    public set axis(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'axis', value);
    }

    public get bgColor(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'bgColor');
    }

    public set bgColor(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'bgColor', value);
    }

    public get cellIndex(): number {
      return InternalHandler.get<IHTMLTableCellElement, number>(this, 'cellIndex');
    }

    public get ch(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'ch');
    }

    public set ch(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'ch', value);
    }

    public get chOff(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'chOff');
    }

    public set chOff(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'chOff', value);
    }

    public get colSpan(): number {
      return InternalHandler.get<IHTMLTableCellElement, number>(this, 'colSpan');
    }

    public set colSpan(value: number) {
      InternalHandler.set<IHTMLTableCellElement, number>(this, 'colSpan', value);
    }

    public get headers(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'headers');
    }

    public set headers(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'headers', value);
    }

    public get height(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'height');
    }

    public set height(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'height', value);
    }

    public get noWrap(): boolean {
      return InternalHandler.get<IHTMLTableCellElement, boolean>(this, 'noWrap');
    }

    public set noWrap(value: boolean) {
      InternalHandler.set<IHTMLTableCellElement, boolean>(this, 'noWrap', value);
    }

    public get rowSpan(): number {
      return InternalHandler.get<IHTMLTableCellElement, number>(this, 'rowSpan');
    }

    public set rowSpan(value: number) {
      InternalHandler.set<IHTMLTableCellElement, number>(this, 'rowSpan', value);
    }

    public get scope(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'scope');
    }

    public set scope(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'scope', value);
    }

    public get vAlign(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'vAlign');
    }

    public set vAlign(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'vAlign', value);
    }

    public get width(): string {
      return InternalHandler.get<IHTMLTableCellElement, string>(this, 'width');
    }

    public set width(value: string) {
      InternalHandler.set<IHTMLTableCellElement, string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCellElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLTableCellElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCellElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLTableCellElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLTableCellElementProperties extends IHTMLElementProperties {
  abbr?: string;
  align?: string;
  axis?: string;
  bgColor?: string;
  cellIndex?: number;
  ch?: string;
  chOff?: string;
  colSpan?: number;
  headers?: string;
  height?: string;
  noWrap?: boolean;
  rowSpan?: number;
  scope?: string;
  vAlign?: string;
  width?: string;
}

export interface IHTMLTableCellElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  cellIndex?: number;
}

export const { getState, setState, setReadonlyOfHTMLTableCellElement } = InternalStateGenerator<
  IHTMLTableCellElement,
  IHTMLTableCellElementProperties,
  IHTMLTableCellElementReadonlyProperties
>('HTMLTableCellElement');
