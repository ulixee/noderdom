import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLOptionsCollection, IHTMLCollection, IValidityState, INodeList, IElement, IHTMLOptionElement, IHTMLOptGroupElement, IHTMLSelectElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLSelectElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSelectElement extends HTMLElement implements IHTMLSelectElement {
    public get autocomplete(): string {
      return InternalHandler.get<IHTMLSelectElement, string>(this, 'autocomplete');
    }

    public set autocomplete(value: string) {
      InternalHandler.set<IHTMLSelectElement, string>(this, 'autocomplete', value);
    }

    public get disabled(): boolean {
      return InternalHandler.get<IHTMLSelectElement, boolean>(this, 'disabled');
    }

    public set disabled(value: boolean) {
      InternalHandler.set<IHTMLSelectElement, boolean>(this, 'disabled', value);
    }

    public get form(): IHTMLFormElement | null {
      return InternalHandler.get<IHTMLSelectElement, IHTMLFormElement | null>(this, 'form');
    }

    public get labels(): INodeList {
      return InternalHandler.get<IHTMLSelectElement, INodeList>(this, 'labels');
    }

    public get length(): number {
      return InternalHandler.get<IHTMLSelectElement, number>(this, 'length');
    }

    public set length(value: number) {
      InternalHandler.set<IHTMLSelectElement, number>(this, 'length', value);
    }

    public get multiple(): boolean {
      return InternalHandler.get<IHTMLSelectElement, boolean>(this, 'multiple');
    }

    public set multiple(value: boolean) {
      InternalHandler.set<IHTMLSelectElement, boolean>(this, 'multiple', value);
    }

    public get name(): string {
      return InternalHandler.get<IHTMLSelectElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLSelectElement, string>(this, 'name', value);
    }

    public get options(): IHTMLOptionsCollection {
      return InternalHandler.get<IHTMLSelectElement, IHTMLOptionsCollection>(this, 'options');
    }

    public get required(): boolean {
      return InternalHandler.get<IHTMLSelectElement, boolean>(this, 'required');
    }

    public set required(value: boolean) {
      InternalHandler.set<IHTMLSelectElement, boolean>(this, 'required', value);
    }

    public get selectedIndex(): number {
      return InternalHandler.get<IHTMLSelectElement, number>(this, 'selectedIndex');
    }

    public set selectedIndex(value: number) {
      InternalHandler.set<IHTMLSelectElement, number>(this, 'selectedIndex', value);
    }

    public get selectedOptions(): IHTMLCollection {
      return InternalHandler.get<IHTMLSelectElement, IHTMLCollection>(this, 'selectedOptions');
    }

    public get size(): number {
      return InternalHandler.get<IHTMLSelectElement, number>(this, 'size');
    }

    public set size(value: number) {
      InternalHandler.set<IHTMLSelectElement, number>(this, 'size', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLSelectElement, string>(this, 'type');
    }

    public get validationMessage(): string {
      return InternalHandler.get<IHTMLSelectElement, string>(this, 'validationMessage');
    }

    public get validity(): IValidityState {
      return InternalHandler.get<IHTMLSelectElement, IValidityState>(this, 'validity');
    }

    public get value(): string {
      return InternalHandler.get<IHTMLSelectElement, string>(this, 'value');
    }

    public set value(value: string) {
      InternalHandler.set<IHTMLSelectElement, string>(this, 'value', value);
    }

    public get willValidate(): boolean {
      return InternalHandler.get<IHTMLSelectElement, boolean>(this, 'willValidate');
    }

    // methods

    public add(element: IHTMLOptionElement | IHTMLOptGroupElement, before?: IHTMLElement | number | null): void {
      InternalHandler.run<IHTMLSelectElement, void>(this, 'add', [element, before]);
    }

    public checkValidity(): boolean {
      return InternalHandler.run<IHTMLSelectElement, boolean>(this, 'checkValidity', []);
    }

    public item(index: number): IElement | null {
      return InternalHandler.run<IHTMLSelectElement, IElement | null>(this, 'item', [index]);
    }

    public namedItem(name: string): IHTMLOptionElement | null {
      return InternalHandler.run<IHTMLSelectElement, IHTMLOptionElement | null>(this, 'namedItem', [name]);
    }

    public remove(index?: number): void {
      InternalHandler.run<IHTMLSelectElement, void>(this, 'remove', [index]);
    }

    public reportValidity(): boolean {
      return InternalHandler.run<IHTMLSelectElement, boolean>(this, 'reportValidity', []);
    }

    public setCustomValidity(error: string): void {
      InternalHandler.run<IHTMLSelectElement, void>(this, 'setCustomValidity', [error]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSelectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLSelectElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSelectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLSelectElement, void>(this, 'removeEventListener', [type, listener, options]);
    }

    [index: number]: IElement;
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLSelectElementProperties extends IHTMLElementProperties {
  autocomplete?: string;
  disabled?: boolean;
  form?: IHTMLFormElement | null;
  labels?: INodeList;
  length?: number;
  multiple?: boolean;
  name?: string;
  options?: IHTMLOptionsCollection;
  required?: boolean;
  selectedIndex?: number;
  selectedOptions?: IHTMLCollection;
  size?: number;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  willValidate?: boolean;
}

export interface IHTMLSelectElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  labels?: INodeList;
  options?: IHTMLOptionsCollection;
  selectedOptions?: IHTMLCollection;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

export const { getState, setState, setReadonlyOfHTMLSelectElement } = InternalStateGenerator<
  IHTMLSelectElement,
  IHTMLSelectElementProperties,
  IHTMLSelectElementReadonlyProperties
>('HTMLSelectElement');
