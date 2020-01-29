import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLCollection, IHTMLTableCellElement, IHTMLTableRowElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLTableRowElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableRowElement extends HTMLElement implements IHTMLTableRowElement {
    public get align(): string {
      return InternalHandler.get<IHTMLTableRowElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLTableRowElement, string>(this, 'align', value);
    }

    public get bgColor(): string {
      return InternalHandler.get<IHTMLTableRowElement, string>(this, 'bgColor');
    }

    public set bgColor(value: string) {
      InternalHandler.set<IHTMLTableRowElement, string>(this, 'bgColor', value);
    }

    public get cells(): IHTMLCollection {
      return InternalHandler.get<IHTMLTableRowElement, IHTMLCollection>(this, 'cells');
    }

    public get ch(): string {
      return InternalHandler.get<IHTMLTableRowElement, string>(this, 'ch');
    }

    public set ch(value: string) {
      InternalHandler.set<IHTMLTableRowElement, string>(this, 'ch', value);
    }

    public get chOff(): string {
      return InternalHandler.get<IHTMLTableRowElement, string>(this, 'chOff');
    }

    public set chOff(value: string) {
      InternalHandler.set<IHTMLTableRowElement, string>(this, 'chOff', value);
    }

    public get rowIndex(): number {
      return InternalHandler.get<IHTMLTableRowElement, number>(this, 'rowIndex');
    }

    public get sectionRowIndex(): number {
      return InternalHandler.get<IHTMLTableRowElement, number>(this, 'sectionRowIndex');
    }

    public get vAlign(): string {
      return InternalHandler.get<IHTMLTableRowElement, string>(this, 'vAlign');
    }

    public set vAlign(value: string) {
      InternalHandler.set<IHTMLTableRowElement, string>(this, 'vAlign', value);
    }

    // methods

    public deleteCell(index: number): void {
      InternalHandler.run<IHTMLTableRowElement, void>(this, 'deleteCell', [index]);
    }

    public insertCell(index?: number): IHTMLTableCellElement {
      return InternalHandler.run<IHTMLTableRowElement, IHTMLTableCellElement>(this, 'insertCell', [index]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableRowElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLTableRowElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableRowElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLTableRowElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLTableRowElementProperties extends IHTMLElementProperties {
  align?: string;
  bgColor?: string;
  cells?: IHTMLCollection;
  ch?: string;
  chOff?: string;
  rowIndex?: number;
  sectionRowIndex?: number;
  vAlign?: string;
}

export interface IHTMLTableRowElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  cells?: IHTMLCollection;
  rowIndex?: number;
  sectionRowIndex?: number;
}

export const { getState, setState, setReadonlyOfHTMLTableRowElement } = InternalStateGenerator<
  IHTMLTableRowElement,
  IHTMLTableRowElementProperties,
  IHTMLTableRowElementReadonlyProperties
>('HTMLTableRowElement');
