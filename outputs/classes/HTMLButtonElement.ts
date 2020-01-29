import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IValidityState, INodeList, IHTMLButtonElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLButtonElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLButtonElement extends HTMLElement implements IHTMLButtonElement {
    public get autofocus(): boolean {
      return InternalHandler.get<IHTMLButtonElement, boolean>(this, 'autofocus');
    }

    public set autofocus(value: boolean) {
      InternalHandler.set<IHTMLButtonElement, boolean>(this, 'autofocus', value);
    }

    public get disabled(): boolean {
      return InternalHandler.get<IHTMLButtonElement, boolean>(this, 'disabled');
    }

    public set disabled(value: boolean) {
      InternalHandler.set<IHTMLButtonElement, boolean>(this, 'disabled', value);
    }

    public get form(): IHTMLFormElement | null {
      return InternalHandler.get<IHTMLButtonElement, IHTMLFormElement | null>(this, 'form');
    }

    public get formNoValidate(): boolean {
      return InternalHandler.get<IHTMLButtonElement, boolean>(this, 'formNoValidate');
    }

    public set formNoValidate(value: boolean) {
      InternalHandler.set<IHTMLButtonElement, boolean>(this, 'formNoValidate', value);
    }

    public get formTarget(): string {
      return InternalHandler.get<IHTMLButtonElement, string>(this, 'formTarget');
    }

    public set formTarget(value: string) {
      InternalHandler.set<IHTMLButtonElement, string>(this, 'formTarget', value);
    }

    public get labels(): INodeList {
      return InternalHandler.get<IHTMLButtonElement, INodeList>(this, 'labels');
    }

    public get name(): string {
      return InternalHandler.get<IHTMLButtonElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLButtonElement, string>(this, 'name', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLButtonElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLButtonElement, string>(this, 'type', value);
    }

    public get validationMessage(): string {
      return InternalHandler.get<IHTMLButtonElement, string>(this, 'validationMessage');
    }

    public get validity(): IValidityState {
      return InternalHandler.get<IHTMLButtonElement, IValidityState>(this, 'validity');
    }

    public get value(): string {
      return InternalHandler.get<IHTMLButtonElement, string>(this, 'value');
    }

    public set value(value: string) {
      InternalHandler.set<IHTMLButtonElement, string>(this, 'value', value);
    }

    public get willValidate(): boolean {
      return InternalHandler.get<IHTMLButtonElement, boolean>(this, 'willValidate');
    }

    // methods

    public checkValidity(): boolean {
      return InternalHandler.run<IHTMLButtonElement, boolean>(this, 'checkValidity', []);
    }

    public reportValidity(): boolean {
      return InternalHandler.run<IHTMLButtonElement, boolean>(this, 'reportValidity', []);
    }

    public setCustomValidity(error: string): void {
      InternalHandler.run<IHTMLButtonElement, void>(this, 'setCustomValidity', [error]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLButtonElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLButtonElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLButtonElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLButtonElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLButtonElementProperties extends IHTMLElementProperties {
  autofocus?: boolean;
  disabled?: boolean;
  form?: IHTMLFormElement | null;
  formNoValidate?: boolean;
  formTarget?: string;
  labels?: INodeList;
  name?: string;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  willValidate?: boolean;
}

export interface IHTMLButtonElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  labels?: INodeList;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

export const { getState, setState, setReadonlyOfHTMLButtonElement } = InternalStateGenerator<
  IHTMLButtonElement,
  IHTMLButtonElementProperties,
  IHTMLButtonElementReadonlyProperties
>('HTMLButtonElement');
