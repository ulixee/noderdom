import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLFormElement,
  IDocument,
  IValidityState,
  IHTMLObjectElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLObjectElement extends HTMLElement implements IHTMLObjectElement {
  protected readonly _: IHTMLObjectElementRps = {};

  // properties

  public get align(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'align', value);
  }

  public get archive(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'archive');
  }

  public set archive(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'archive', value);
  }

  public get border(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'border');
  }

  public set border(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'border', value);
  }

  public get code(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'code');
  }

  public set code(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'code', value);
  }

  public get codeBase(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'codeBase');
  }

  public set codeBase(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'codeBase', value);
  }

  public get codeType(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'codeType');
  }

  public set codeType(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'codeType', value);
  }

  public get contentDocument(): IDocument | null {
    return InternalHandler.get<IHTMLObjectElement, IDocument | null>(this, 'contentDocument');
  }

  public get data(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'data');
  }

  public set data(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'data', value);
  }

  public get declare(): boolean {
    return InternalHandler.get<IHTMLObjectElement, boolean>(this, 'declare');
  }

  public set declare(value: boolean) {
    InternalHandler.set<IHTMLObjectElement, boolean>(this, 'declare', value);
  }

  public get form(): IHTMLFormElement | null {
    return InternalHandler.get<IHTMLObjectElement, IHTMLFormElement | null>(this, 'form');
  }

  public get height(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'height');
  }

  public set height(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'height', value);
  }

  public get hspace(): number {
    return InternalHandler.get<IHTMLObjectElement, number>(this, 'hspace');
  }

  public set hspace(value: number) {
    InternalHandler.set<IHTMLObjectElement, number>(this, 'hspace', value);
  }

  public get name(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'name', value);
  }

  public get standby(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'standby');
  }

  public set standby(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'standby', value);
  }

  public get type(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'type', value);
  }

  public get useMap(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'useMap');
  }

  public set useMap(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'useMap', value);
  }

  public get validationMessage(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'validationMessage');
  }

  public get validity(): IValidityState {
    return InternalHandler.get<IHTMLObjectElement, IValidityState>(this, 'validity');
  }

  public get vspace(): number {
    return InternalHandler.get<IHTMLObjectElement, number>(this, 'vspace');
  }

  public set vspace(value: number) {
    InternalHandler.set<IHTMLObjectElement, number>(this, 'vspace', value);
  }

  public get width(): string {
    return InternalHandler.get<IHTMLObjectElement, string>(this, 'width');
  }

  public set width(value: string) {
    InternalHandler.set<IHTMLObjectElement, string>(this, 'width', value);
  }

  public get willValidate(): boolean {
    return InternalHandler.get<IHTMLObjectElement, boolean>(this, 'willValidate');
  }

  // methods

  public checkValidity(): boolean {
    return InternalHandler.run<IHTMLObjectElement, boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): boolean {
    return InternalHandler.run<IHTMLObjectElement, boolean>(this, 'reportValidity', []);
  }

  public setCustomValidity(error: string): void {
    InternalHandler.run<IHTMLObjectElement, void>(this, 'setCustomValidity', [error]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLObjectElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLObjectElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLObjectElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLObjectElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLObjectElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLObjectElementRps extends IHTMLElementRps {
  readonly contentDocument?: IDocument | null;
  readonly form?: IHTMLFormElement | null;
  readonly validationMessage?: string;
  readonly validity?: IValidityState;
  readonly willValidate?: boolean;
}

export function setHTMLObjectElementRps(instance: IHTMLObjectElement, data: IHTMLObjectElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLObjectElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLObjectElement`);
    }
    properties[key] = value;
  });
}
