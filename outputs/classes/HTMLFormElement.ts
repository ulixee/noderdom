import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormControlsCollection, IHTMLFormElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLFormElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFormElement extends HTMLElement implements IHTMLFormElement {
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFormElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLFormElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFormElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLFormElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLFormElementProperties extends IHTMLElementProperties {
  acceptCharset?: string;
  action?: string;
  elements?: IHTMLFormControlsCollection;
  enctype?: string;
  length?: number;
  method?: string;
  name?: string;
  noValidate?: boolean;
  target?: string;
}

export interface IHTMLFormElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  elements?: IHTMLFormControlsCollection;
  length?: number;
}

export const { getState, setState, setReadonlyOfHTMLFormElement } = InternalStateGenerator<
  IHTMLFormElement,
  IHTMLFormElementProperties,
  IHTMLFormElementReadonlyProperties
>('HTMLFormElement');
