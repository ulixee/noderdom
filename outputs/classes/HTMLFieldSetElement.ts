import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLCollection, IValidityState, IHTMLFieldSetElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLFieldSetElement extends HTMLElement implements IHTMLFieldSetElement {
  protected readonly _: IHTMLFieldSetElementRps = {};

  // properties

  public get disabled(): boolean {
    return InternalHandler.get<IHTMLFieldSetElement, boolean>(this, 'disabled');
  }

  public set disabled(value: boolean) {
    InternalHandler.set<IHTMLFieldSetElement, boolean>(this, 'disabled', value);
  }

  public get elements(): IHTMLCollection {
    return InternalHandler.get<IHTMLFieldSetElement, IHTMLCollection>(this, 'elements');
  }

  public get form(): IHTMLFormElement | null {
    return InternalHandler.get<IHTMLFieldSetElement, IHTMLFormElement | null>(this, 'form');
  }

  public get name(): string {
    return InternalHandler.get<IHTMLFieldSetElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLFieldSetElement, string>(this, 'name', value);
  }

  public get type(): string {
    return InternalHandler.get<IHTMLFieldSetElement, string>(this, 'type');
  }

  public get validationMessage(): string {
    return InternalHandler.get<IHTMLFieldSetElement, string>(this, 'validationMessage');
  }

  public get validity(): IValidityState {
    return InternalHandler.get<IHTMLFieldSetElement, IValidityState>(this, 'validity');
  }

  public get willValidate(): boolean {
    return InternalHandler.get<IHTMLFieldSetElement, boolean>(this, 'willValidate');
  }

  // methods

  public checkValidity(): boolean {
    return InternalHandler.run<IHTMLFieldSetElement, boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): boolean {
    return InternalHandler.run<IHTMLFieldSetElement, boolean>(this, 'reportValidity', []);
  }

  public setCustomValidity(error: string): void {
    InternalHandler.run<IHTMLFieldSetElement, void>(this, 'setCustomValidity', [error]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFieldSetElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLFieldSetElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFieldSetElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLFieldSetElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLFieldSetElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLFieldSetElementRps extends IHTMLElementRps {
  readonly elements?: IHTMLCollection;
  readonly form?: IHTMLFormElement | null;
  readonly type?: string;
  readonly validationMessage?: string;
  readonly validity?: IValidityState;
  readonly willValidate?: boolean;
}

export function setHTMLFieldSetElementRps(instance: IHTMLFieldSetElement, data: IHTMLFieldSetElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLFieldSetElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLFieldSetElement`);
    }
    properties[key] = value;
  });
}
