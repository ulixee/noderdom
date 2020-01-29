import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLOptionElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLOptionElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOptionElement extends HTMLElement implements IHTMLOptionElement {
    public get defaultSelected(): boolean {
      return InternalHandler.get<IHTMLOptionElement, boolean>(this, 'defaultSelected');
    }

    public set defaultSelected(value: boolean) {
      InternalHandler.set<IHTMLOptionElement, boolean>(this, 'defaultSelected', value);
    }

    public get disabled(): boolean {
      return InternalHandler.get<IHTMLOptionElement, boolean>(this, 'disabled');
    }

    public set disabled(value: boolean) {
      InternalHandler.set<IHTMLOptionElement, boolean>(this, 'disabled', value);
    }

    public get form(): IHTMLFormElement | null {
      return InternalHandler.get<IHTMLOptionElement, IHTMLFormElement | null>(this, 'form');
    }

    public get index(): number {
      return InternalHandler.get<IHTMLOptionElement, number>(this, 'index');
    }

    public get label(): string {
      return InternalHandler.get<IHTMLOptionElement, string>(this, 'label');
    }

    public set label(value: string) {
      InternalHandler.set<IHTMLOptionElement, string>(this, 'label', value);
    }

    public get selected(): boolean {
      return InternalHandler.get<IHTMLOptionElement, boolean>(this, 'selected');
    }

    public set selected(value: boolean) {
      InternalHandler.set<IHTMLOptionElement, boolean>(this, 'selected', value);
    }

    public get text(): string {
      return InternalHandler.get<IHTMLOptionElement, string>(this, 'text');
    }

    public set text(value: string) {
      InternalHandler.set<IHTMLOptionElement, string>(this, 'text', value);
    }

    public get value(): string {
      return InternalHandler.get<IHTMLOptionElement, string>(this, 'value');
    }

    public set value(value: string) {
      InternalHandler.set<IHTMLOptionElement, string>(this, 'value', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLOptionElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLOptionElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLOptionElementProperties extends IHTMLElementProperties {
  defaultSelected?: boolean;
  disabled?: boolean;
  form?: IHTMLFormElement | null;
  index?: number;
  label?: string;
  selected?: boolean;
  text?: string;
  value?: string;
}

export interface IHTMLOptionElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  index?: number;
}

export const { getState, setState, setReadonlyOfHTMLOptionElement } = InternalStateGenerator<
  IHTMLOptionElement,
  IHTMLOptionElementProperties,
  IHTMLOptionElementReadonlyProperties
>('HTMLOptionElement');
