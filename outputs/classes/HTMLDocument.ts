import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IDocument, IDocumentEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDocument } from '../interfaces';
import { IDocumentProperties, IDocumentReadonlyProperties } from './Document';

// tslint:disable-next-line:variable-name
export function HTMLDocumentGenerator(Document: Constructable<IDocument>) {
  return class HTMLDocument extends Document implements IHTMLDocument {public addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IHTMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLDocument, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IHTMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLDocument, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLDocumentProperties extends IDocumentProperties {}

export interface IHTMLDocumentReadonlyProperties extends IDocumentReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLDocument } = InternalStateGenerator<
  IHTMLDocument,
  IHTMLDocumentProperties,
  IHTMLDocumentReadonlyProperties
>('HTMLDocument');
