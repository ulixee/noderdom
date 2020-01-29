import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLCollection, IValidityState, IHTMLFieldSetElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLFieldSetElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFieldSetElement extends HTMLElement implements IHTMLFieldSetElement {
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
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLFieldSetElementProperties extends IHTMLElementProperties {
  disabled?: boolean;
  elements?: IHTMLCollection;
  form?: IHTMLFormElement | null;
  name?: string;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

export interface IHTMLFieldSetElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  elements?: IHTMLCollection;
  form?: IHTMLFormElement | null;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

export const { getState, setState, setReadonlyOfHTMLFieldSetElement } = InternalStateGenerator<
  IHTMLFieldSetElement,
  IHTMLFieldSetElementProperties,
  IHTMLFieldSetElementReadonlyProperties
>('HTMLFieldSetElement');
