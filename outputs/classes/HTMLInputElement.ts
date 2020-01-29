import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IFileList, IValidityState, INodeList, ISelectionMode, IHTMLInputElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLInputElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLInputElement extends HTMLElement implements IHTMLInputElement {
    public get accept(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'accept');
    }

    public set accept(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'accept', value);
    }

    public get align(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'align', value);
    }

    public get alt(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'alt');
    }

    public set alt(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'alt', value);
    }

    public get autocomplete(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'autocomplete');
    }

    public set autocomplete(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'autocomplete', value);
    }

    public get autofocus(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'autofocus');
    }

    public set autofocus(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'autofocus', value);
    }

    public get checked(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'checked');
    }

    public set checked(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'checked', value);
    }

    public get defaultChecked(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'defaultChecked');
    }

    public set defaultChecked(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'defaultChecked', value);
    }

    public get defaultValue(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'defaultValue');
    }

    public set defaultValue(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'defaultValue', value);
    }

    public get dirName(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'dirName');
    }

    public set dirName(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'dirName', value);
    }

    public get disabled(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'disabled');
    }

    public set disabled(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'disabled', value);
    }

    public get files(): IFileList | null {
      return InternalHandler.get<IHTMLInputElement, IFileList | null>(this, 'files');
    }

    public set files(value: IFileList | null) {
      InternalHandler.set<IHTMLInputElement, IFileList | null>(this, 'files', value);
    }

    public get form(): IHTMLFormElement | null {
      return InternalHandler.get<IHTMLInputElement, IHTMLFormElement | null>(this, 'form');
    }

    public get formNoValidate(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'formNoValidate');
    }

    public set formNoValidate(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'formNoValidate', value);
    }

    public get formTarget(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'formTarget');
    }

    public set formTarget(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'formTarget', value);
    }

    public get indeterminate(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'indeterminate');
    }

    public set indeterminate(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'indeterminate', value);
    }

    public get inputMode(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'inputMode');
    }

    public set inputMode(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'inputMode', value);
    }

    public get labels(): INodeList | null {
      return InternalHandler.get<IHTMLInputElement, INodeList | null>(this, 'labels');
    }

    public get list(): IHTMLElement | null {
      return InternalHandler.get<IHTMLInputElement, IHTMLElement | null>(this, 'list');
    }

    public get max(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'max');
    }

    public set max(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'max', value);
    }

    public get maxLength(): number {
      return InternalHandler.get<IHTMLInputElement, number>(this, 'maxLength');
    }

    public set maxLength(value: number) {
      InternalHandler.set<IHTMLInputElement, number>(this, 'maxLength', value);
    }

    public get min(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'min');
    }

    public set min(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'min', value);
    }

    public get minLength(): number {
      return InternalHandler.get<IHTMLInputElement, number>(this, 'minLength');
    }

    public set minLength(value: number) {
      InternalHandler.set<IHTMLInputElement, number>(this, 'minLength', value);
    }

    public get multiple(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'multiple');
    }

    public set multiple(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'multiple', value);
    }

    public get name(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'name', value);
    }

    public get pattern(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'pattern');
    }

    public set pattern(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'pattern', value);
    }

    public get placeholder(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'placeholder');
    }

    public set placeholder(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'placeholder', value);
    }

    public get readOnly(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'readOnly');
    }

    public set readOnly(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'readOnly', value);
    }

    public get required(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'required');
    }

    public set required(value: boolean) {
      InternalHandler.set<IHTMLInputElement, boolean>(this, 'required', value);
    }

    public get selectionDirection(): string | null {
      return InternalHandler.get<IHTMLInputElement, string | null>(this, 'selectionDirection');
    }

    public set selectionDirection(value: string | null) {
      InternalHandler.set<IHTMLInputElement, string | null>(this, 'selectionDirection', value);
    }

    public get selectionEnd(): number | null {
      return InternalHandler.get<IHTMLInputElement, number | null>(this, 'selectionEnd');
    }

    public set selectionEnd(value: number | null) {
      InternalHandler.set<IHTMLInputElement, number | null>(this, 'selectionEnd', value);
    }

    public get selectionStart(): number | null {
      return InternalHandler.get<IHTMLInputElement, number | null>(this, 'selectionStart');
    }

    public set selectionStart(value: number | null) {
      InternalHandler.set<IHTMLInputElement, number | null>(this, 'selectionStart', value);
    }

    public get size(): number {
      return InternalHandler.get<IHTMLInputElement, number>(this, 'size');
    }

    public set size(value: number) {
      InternalHandler.set<IHTMLInputElement, number>(this, 'size', value);
    }

    public get src(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'src');
    }

    public set src(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'src', value);
    }

    public get step(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'step');
    }

    public set step(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'step', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'type', value);
    }

    public get useMap(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'useMap');
    }

    public set useMap(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'useMap', value);
    }

    public get validationMessage(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'validationMessage');
    }

    public get validity(): IValidityState {
      return InternalHandler.get<IHTMLInputElement, IValidityState>(this, 'validity');
    }

    public get value(): string {
      return InternalHandler.get<IHTMLInputElement, string>(this, 'value');
    }

    public set value(value: string) {
      InternalHandler.set<IHTMLInputElement, string>(this, 'value', value);
    }

    public get valueAsDate(): any {
      return InternalHandler.get<IHTMLInputElement, any>(this, 'valueAsDate');
    }

    public set valueAsDate(value: any) {
      InternalHandler.set<IHTMLInputElement, any>(this, 'valueAsDate', value);
    }

    public get valueAsNumber(): number {
      return InternalHandler.get<IHTMLInputElement, number>(this, 'valueAsNumber');
    }

    public set valueAsNumber(value: number) {
      InternalHandler.set<IHTMLInputElement, number>(this, 'valueAsNumber', value);
    }

    public get willValidate(): boolean {
      return InternalHandler.get<IHTMLInputElement, boolean>(this, 'willValidate');
    }

    // methods

    public checkValidity(): boolean {
      return InternalHandler.run<IHTMLInputElement, boolean>(this, 'checkValidity', []);
    }

    public reportValidity(): boolean {
      return InternalHandler.run<IHTMLInputElement, boolean>(this, 'reportValidity', []);
    }

    public select(): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'select', []);
    }

    public setCustomValidity(error: string): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'setCustomValidity', [error]);
    }

    public setRangeText(replacement: string): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'setRangeText', [replacement]);
    }

    public setRangeText(replacement: string, start: number, end: number, selectionMode?: ISelectionMode): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'setRangeText', [replacement, start, end, selectionMode]);
    }

    public setSelectionRange(start: number, end: number, direction?: string): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'setSelectionRange', [start, end, direction]);
    }

    public stepDown(n?: number): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'stepDown', [n]);
    }

    public stepUp(n?: number): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'stepUp', [n]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLInputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLInputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLInputElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLInputElementProperties extends IHTMLElementProperties {
  accept?: string;
  align?: string;
  alt?: string;
  autocomplete?: string;
  autofocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  defaultValue?: string;
  dirName?: string;
  disabled?: boolean;
  files?: IFileList | null;
  form?: IHTMLFormElement | null;
  formNoValidate?: boolean;
  formTarget?: string;
  indeterminate?: boolean;
  inputMode?: string;
  labels?: INodeList | null;
  list?: IHTMLElement | null;
  max?: string;
  maxLength?: number;
  min?: string;
  minLength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  selectionDirection?: string | null;
  selectionEnd?: number | null;
  selectionStart?: number | null;
  size?: number;
  src?: string;
  step?: string;
  type?: string;
  useMap?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  valueAsDate?: any;
  valueAsNumber?: number;
  willValidate?: boolean;
}

export interface IHTMLInputElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  labels?: INodeList | null;
  list?: IHTMLElement | null;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

export const { getState, setState, setReadonlyOfHTMLInputElement } = InternalStateGenerator<
  IHTMLInputElement,
  IHTMLInputElementProperties,
  IHTMLInputElementReadonlyProperties
>('HTMLInputElement');
