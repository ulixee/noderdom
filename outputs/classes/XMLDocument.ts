import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IDocument, IDocumentEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IXMLDocument } from '../interfaces';
import { IDocumentProperties, IDocumentReadonlyProperties } from './Document';

// tslint:disable-next-line:variable-name
export function XMLDocumentGenerator(Document: Constructable<IDocument>) {
  return class XMLDocument extends Document implements IXMLDocument {public addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IXMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IXMLDocument, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IXMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IXMLDocument, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IXMLDocumentProperties extends IDocumentProperties {}

export interface IXMLDocumentReadonlyProperties extends IDocumentReadonlyProperties {}

export const { getState, setState, setReadonlyOfXMLDocument } = InternalStateGenerator<
  IXMLDocument,
  IXMLDocumentProperties,
  IXMLDocumentReadonlyProperties
>('XMLDocument');
