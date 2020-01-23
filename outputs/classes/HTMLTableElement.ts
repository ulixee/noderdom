import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLTableCaptionElement,
  IHTMLTableSectionElement,
  IHTMLCollection,
  IHTMLTableRowElement,
  IHTMLTableElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLTableElement extends HTMLElement implements IHTMLTableElement {
  protected readonly _: IHTMLTableElementRps = {};

  // properties

  public get align(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'align', value);
  }

  public get bgColor(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'bgColor');
  }

  public set bgColor(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'bgColor', value);
  }

  public get border(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'border');
  }

  public set border(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'border', value);
  }

  public get caption(): IHTMLTableCaptionElement | null {
    return InternalHandler.get<IHTMLTableElement, IHTMLTableCaptionElement | null>(this, 'caption');
  }

  public set caption(value: IHTMLTableCaptionElement | null) {
    InternalHandler.set<IHTMLTableElement, IHTMLTableCaptionElement | null>(this, 'caption', value);
  }

  public get cellPadding(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'cellPadding');
  }

  public set cellPadding(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'cellPadding', value);
  }

  public get cellSpacing(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'cellSpacing');
  }

  public set cellSpacing(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'cellSpacing', value);
  }

  public get frame(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'frame');
  }

  public set frame(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'frame', value);
  }

  public get rows(): IHTMLCollection {
    return InternalHandler.get<IHTMLTableElement, IHTMLCollection>(this, 'rows');
  }

  public get rules(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'rules');
  }

  public set rules(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'rules', value);
  }

  public get summary(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'summary');
  }

  public set summary(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'summary', value);
  }

  public get tBodies(): IHTMLCollection {
    return InternalHandler.get<IHTMLTableElement, IHTMLCollection>(this, 'tBodies');
  }

  public get tFoot(): IHTMLTableSectionElement | null {
    return InternalHandler.get<IHTMLTableElement, IHTMLTableSectionElement | null>(this, 'tFoot');
  }

  public set tFoot(value: IHTMLTableSectionElement | null) {
    InternalHandler.set<IHTMLTableElement, IHTMLTableSectionElement | null>(this, 'tFoot', value);
  }

  public get tHead(): IHTMLTableSectionElement | null {
    return InternalHandler.get<IHTMLTableElement, IHTMLTableSectionElement | null>(this, 'tHead');
  }

  public set tHead(value: IHTMLTableSectionElement | null) {
    InternalHandler.set<IHTMLTableElement, IHTMLTableSectionElement | null>(this, 'tHead', value);
  }

  public get width(): string {
    return InternalHandler.get<IHTMLTableElement, string>(this, 'width');
  }

  public set width(value: string) {
    InternalHandler.set<IHTMLTableElement, string>(this, 'width', value);
  }

  // methods

  public createCaption(): IHTMLTableCaptionElement {
    return InternalHandler.run<IHTMLTableElement, IHTMLTableCaptionElement>(this, 'createCaption', []);
  }

  public createTBody(): IHTMLTableSectionElement {
    return InternalHandler.run<IHTMLTableElement, IHTMLTableSectionElement>(this, 'createTBody', []);
  }

  public createTFoot(): IHTMLTableSectionElement {
    return InternalHandler.run<IHTMLTableElement, IHTMLTableSectionElement>(this, 'createTFoot', []);
  }

  public createTHead(): IHTMLTableSectionElement {
    return InternalHandler.run<IHTMLTableElement, IHTMLTableSectionElement>(this, 'createTHead', []);
  }

  public deleteCaption(): void {
    InternalHandler.run<IHTMLTableElement, void>(this, 'deleteCaption', []);
  }

  public deleteRow(index: number): void {
    InternalHandler.run<IHTMLTableElement, void>(this, 'deleteRow', [index]);
  }

  public deleteTFoot(): void {
    InternalHandler.run<IHTMLTableElement, void>(this, 'deleteTFoot', []);
  }

  public deleteTHead(): void {
    InternalHandler.run<IHTMLTableElement, void>(this, 'deleteTHead', []);
  }

  public insertRow(index?: number): IHTMLTableRowElement {
    return InternalHandler.run<IHTMLTableElement, IHTMLTableRowElement>(this, 'insertRow', [index]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTableElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTableElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTableElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTableElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLTableElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLTableElementRps extends IHTMLElementRps {
  readonly rows?: IHTMLCollection;
  readonly tBodies?: IHTMLCollection;
}

export function setHTMLTableElementRps(instance: IHTMLTableElement, data: IHTMLTableElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLTableElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLTableElement`);
    }
    properties[key] = value;
  });
}
