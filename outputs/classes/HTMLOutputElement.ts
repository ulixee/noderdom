import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IDOMTokenList,
  IHTMLFormElement,
  IValidityState,
  INodeList,
  IHTMLOutputElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLOutputElement extends HTMLElement implements IHTMLOutputElement {
  protected readonly _: IHTMLOutputElementRps = {};

  // properties

  public get defaultValue(): string {
    return InternalHandler.get<IHTMLOutputElement, string>(this, 'defaultValue');
  }

  public set defaultValue(value: string) {
    InternalHandler.set<IHTMLOutputElement, string>(this, 'defaultValue', value);
  }

  public get form(): IHTMLFormElement | null {
    return InternalHandler.get<IHTMLOutputElement, IHTMLFormElement | null>(this, 'form');
  }

  public get htmlFor(): IDOMTokenList {
    return InternalHandler.get<IHTMLOutputElement, IDOMTokenList>(this, 'htmlFor');
  }

  public get labels(): INodeList {
    return InternalHandler.get<IHTMLOutputElement, INodeList>(this, 'labels');
  }

  public get name(): string {
    return InternalHandler.get<IHTMLOutputElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLOutputElement, string>(this, 'name', value);
  }

  public get type(): string {
    return InternalHandler.get<IHTMLOutputElement, string>(this, 'type');
  }

  public get validationMessage(): string {
    return InternalHandler.get<IHTMLOutputElement, string>(this, 'validationMessage');
  }

  public get validity(): IValidityState {
    return InternalHandler.get<IHTMLOutputElement, IValidityState>(this, 'validity');
  }

  public get value(): string {
    return InternalHandler.get<IHTMLOutputElement, string>(this, 'value');
  }

  public set value(value: string) {
    InternalHandler.set<IHTMLOutputElement, string>(this, 'value', value);
  }

  public get willValidate(): boolean {
    return InternalHandler.get<IHTMLOutputElement, boolean>(this, 'willValidate');
  }

  // methods

  public checkValidity(): boolean {
    return InternalHandler.run<IHTMLOutputElement, boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): boolean {
    return InternalHandler.run<IHTMLOutputElement, boolean>(this, 'reportValidity', []);
  }

  public setCustomValidity(error: string): void {
    InternalHandler.run<IHTMLOutputElement, void>(this, 'setCustomValidity', [error]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLOutputElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLOutputElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLOutputElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLOutputElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLOutputElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLOutputElementRps extends IHTMLElementRps {
  readonly form?: IHTMLFormElement | null;
  readonly htmlFor?: IDOMTokenList;
  readonly labels?: INodeList;
  readonly type?: string;
  readonly validationMessage?: string;
  readonly validity?: IValidityState;
  readonly willValidate?: boolean;
}

export function setHTMLOutputElementRps(instance: IHTMLOutputElement, data: IHTMLOutputElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLOutputElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLOutputElement`);
    }
    properties[key] = value;
  });
}
