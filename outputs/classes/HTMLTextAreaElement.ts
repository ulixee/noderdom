import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IValidityState, INodeList, ISelectionMode, IHTMLTextAreaElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLTextAreaElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTextAreaElement extends HTMLElement implements IHTMLTextAreaElement {
    public get autocomplete(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'autocomplete');
    }

    public set autocomplete(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'autocomplete', value);
    }

    public get autofocus(): boolean {
      return InternalHandler.get<IHTMLTextAreaElement, boolean>(this, 'autofocus');
    }

    public set autofocus(value: boolean) {
      InternalHandler.set<IHTMLTextAreaElement, boolean>(this, 'autofocus', value);
    }

    public get cols(): number {
      return InternalHandler.get<IHTMLTextAreaElement, number>(this, 'cols');
    }

    public set cols(value: number) {
      InternalHandler.set<IHTMLTextAreaElement, number>(this, 'cols', value);
    }

    public get defaultValue(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'defaultValue');
    }

    public set defaultValue(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'defaultValue', value);
    }

    public get dirName(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'dirName');
    }

    public set dirName(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'dirName', value);
    }

    public get disabled(): boolean {
      return InternalHandler.get<IHTMLTextAreaElement, boolean>(this, 'disabled');
    }

    public set disabled(value: boolean) {
      InternalHandler.set<IHTMLTextAreaElement, boolean>(this, 'disabled', value);
    }

    public get form(): IHTMLFormElement | null {
      return InternalHandler.get<IHTMLTextAreaElement, IHTMLFormElement | null>(this, 'form');
    }

    public get inputMode(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'inputMode');
    }

    public set inputMode(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'inputMode', value);
    }

    public get labels(): INodeList {
      return InternalHandler.get<IHTMLTextAreaElement, INodeList>(this, 'labels');
    }

    public get maxLength(): number {
      return InternalHandler.get<IHTMLTextAreaElement, number>(this, 'maxLength');
    }

    public set maxLength(value: number) {
      InternalHandler.set<IHTMLTextAreaElement, number>(this, 'maxLength', value);
    }

    public get minLength(): number {
      return InternalHandler.get<IHTMLTextAreaElement, number>(this, 'minLength');
    }

    public set minLength(value: number) {
      InternalHandler.set<IHTMLTextAreaElement, number>(this, 'minLength', value);
    }

    public get name(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'name', value);
    }

    public get placeholder(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'placeholder');
    }

    public set placeholder(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'placeholder', value);
    }

    public get readOnly(): boolean {
      return InternalHandler.get<IHTMLTextAreaElement, boolean>(this, 'readOnly');
    }

    public set readOnly(value: boolean) {
      InternalHandler.set<IHTMLTextAreaElement, boolean>(this, 'readOnly', value);
    }

    public get required(): boolean {
      return InternalHandler.get<IHTMLTextAreaElement, boolean>(this, 'required');
    }

    public set required(value: boolean) {
      InternalHandler.set<IHTMLTextAreaElement, boolean>(this, 'required', value);
    }

    public get rows(): number {
      return InternalHandler.get<IHTMLTextAreaElement, number>(this, 'rows');
    }

    public set rows(value: number) {
      InternalHandler.set<IHTMLTextAreaElement, number>(this, 'rows', value);
    }

    public get selectionDirection(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'selectionDirection');
    }

    public set selectionDirection(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'selectionDirection', value);
    }

    public get selectionEnd(): number {
      return InternalHandler.get<IHTMLTextAreaElement, number>(this, 'selectionEnd');
    }

    public set selectionEnd(value: number) {
      InternalHandler.set<IHTMLTextAreaElement, number>(this, 'selectionEnd', value);
    }

    public get selectionStart(): number {
      return InternalHandler.get<IHTMLTextAreaElement, number>(this, 'selectionStart');
    }

    public set selectionStart(value: number) {
      InternalHandler.set<IHTMLTextAreaElement, number>(this, 'selectionStart', value);
    }

    public get textLength(): number {
      return InternalHandler.get<IHTMLTextAreaElement, number>(this, 'textLength');
    }

    public get type(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'type');
    }

    public get validationMessage(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'validationMessage');
    }

    public get validity(): IValidityState {
      return InternalHandler.get<IHTMLTextAreaElement, IValidityState>(this, 'validity');
    }

    public get value(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'value');
    }

    public set value(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'value', value);
    }

    public get willValidate(): boolean {
      return InternalHandler.get<IHTMLTextAreaElement, boolean>(this, 'willValidate');
    }

    public get wrap(): string {
      return InternalHandler.get<IHTMLTextAreaElement, string>(this, 'wrap');
    }

    public set wrap(value: string) {
      InternalHandler.set<IHTMLTextAreaElement, string>(this, 'wrap', value);
    }

    // methods

    public checkValidity(): boolean {
      return InternalHandler.run<IHTMLTextAreaElement, boolean>(this, 'checkValidity', []);
    }

    public reportValidity(): boolean {
      return InternalHandler.run<IHTMLTextAreaElement, boolean>(this, 'reportValidity', []);
    }

    public select(): void {
      InternalHandler.run<IHTMLTextAreaElement, void>(this, 'select', []);
    }

    public setCustomValidity(error: string): void {
      InternalHandler.run<IHTMLTextAreaElement, void>(this, 'setCustomValidity', [error]);
    }

    public setRangeText(replacement: string): void {
      InternalHandler.run<IHTMLTextAreaElement, void>(this, 'setRangeText', [replacement]);
    }

    public setRangeText(replacement: string, start: number, end: number, selectionMode?: ISelectionMode): void {
      InternalHandler.run<IHTMLTextAreaElement, void>(this, 'setRangeText', [replacement, start, end, selectionMode]);
    }

    public setSelectionRange(start: number, end: number, direction?: string): void {
      InternalHandler.run<IHTMLTextAreaElement, void>(this, 'setSelectionRange', [start, end, direction]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTextAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLTextAreaElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTextAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLTextAreaElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLTextAreaElementProperties extends IHTMLElementProperties {
  autocomplete?: string;
  autofocus?: boolean;
  cols?: number;
  defaultValue?: string;
  dirName?: string;
  disabled?: boolean;
  form?: IHTMLFormElement | null;
  inputMode?: string;
  labels?: INodeList;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  selectionDirection?: string;
  selectionEnd?: number;
  selectionStart?: number;
  textLength?: number;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  willValidate?: boolean;
  wrap?: string;
}

export interface IHTMLTextAreaElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  labels?: INodeList;
  textLength?: number;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

export const { getState, setState, setReadonlyOfHTMLTextAreaElement } = InternalStateGenerator<
  IHTMLTextAreaElement,
  IHTMLTextAreaElementProperties,
  IHTMLTextAreaElementReadonlyProperties
>('HTMLTextAreaElement');
