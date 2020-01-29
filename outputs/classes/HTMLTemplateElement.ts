import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDocumentFragment, IHTMLTemplateElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLTemplateElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTemplateElement extends HTMLElement implements IHTMLTemplateElement {
    public get content(): IDocumentFragment {
      return InternalHandler.get<IHTMLTemplateElement, IDocumentFragment>(this, 'content');
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTemplateElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLTemplateElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTemplateElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLTemplateElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLTemplateElementProperties extends IHTMLElementProperties {
  content?: IDocumentFragment;
}

export interface IHTMLTemplateElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  content?: IDocumentFragment;
}

export const { getState, setState, setReadonlyOfHTMLTemplateElement } = InternalStateGenerator<
  IHTMLTemplateElement,
  IHTMLTemplateElementProperties,
  IHTMLTemplateElementReadonlyProperties
>('HTMLTemplateElement');
