import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLFormControlsCollection,
  IHTMLElement,
  IHTMLFormElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLFormElement extends HTMLElement implements IHTMLFormElement {
  protected readonly _: IHTMLFormElementRps = {};

  // properties

  public get acceptCharset(): string {
    return InternalHandler.get<IHTMLFormElement, string>(this, 'acceptCharset');
  }

  public set acceptCharset(value: string) {
    InternalHandler.set<IHTMLFormElement, string>(this, 'acceptCharset', value);
  }

  public get action(): string {
    return InternalHandler.get<IHTMLFormElement, string>(this, 'action');
  }

  public set action(value: string) {
    InternalHandler.set<IHTMLFormElement, string>(this, 'action', value);
  }

  public get elements(): IHTMLFormControlsCollection {
    return InternalHandler.get<IHTMLFormElement, IHTMLFormControlsCollection>(this, 'elements');
  }

  public get enctype(): string {
    return InternalHandler.get<IHTMLFormElement, string>(this, 'enctype');
  }

  public set enctype(value: string) {
    InternalHandler.set<IHTMLFormElement, string>(this, 'enctype', value);
  }

  public get length(): number {
    return InternalHandler.get<IHTMLFormElement, number>(this, 'length');
  }

  public get method(): string {
    return InternalHandler.get<IHTMLFormElement, string>(this, 'method');
  }

  public set method(value: string) {
    InternalHandler.set<IHTMLFormElement, string>(this, 'method', value);
  }

  public get name(): string {
    return InternalHandler.get<IHTMLFormElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLFormElement, string>(this, 'name', value);
  }

  public get noValidate(): boolean {
    return InternalHandler.get<IHTMLFormElement, boolean>(this, 'noValidate');
  }

  public set noValidate(value: boolean) {
    InternalHandler.set<IHTMLFormElement, boolean>(this, 'noValidate', value);
  }

  public get target(): string {
    return InternalHandler.get<IHTMLFormElement, string>(this, 'target');
  }

  public set target(value: string) {
    InternalHandler.set<IHTMLFormElement, string>(this, 'target', value);
  }

  // methods

  public checkValidity(): boolean {
    return InternalHandler.run<IHTMLFormElement, boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): boolean {
    return InternalHandler.run<IHTMLFormElement, boolean>(this, 'reportValidity', []);
  }

  public requestSubmit(submitter?: IHTMLElement): void {
    InternalHandler.run<IHTMLFormElement, void>(this, 'requestSubmit', [submitter]);
  }

  public reset(): void {
    InternalHandler.run<IHTMLFormElement, void>(this, 'reset', []);
  }

  public submit(): void {
    InternalHandler.run<IHTMLFormElement, void>(this, 'submit', []);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLFormElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLFormElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLFormElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLFormElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLFormElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLFormElementRps extends IHTMLElementRps {
  readonly elements?: IHTMLFormControlsCollection;
  readonly length?: number;
}

export function setHTMLFormElementRps(instance: IHTMLFormElement, data: IHTMLFormElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLFormElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLFormElement`);
    }
    properties[key] = value;
  });
}
