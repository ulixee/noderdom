import InternalHandler from '../InternalHandler';
import {
  IDocumentEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IXMLDocument,
} from '../interfaces';
import Document, { IDocumentRps, rpDocumentKeys } from './Document';

export default class XMLDocument extends Document implements IXMLDocument {
  public addEventListener<K extends keyof IDocumentEventMap>(
    type: K,
    listener: (this: IXMLDocument, ev: IDocumentEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IXMLDocument, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IDocumentEventMap>(
    type: K,
    listener: (this: IXMLDocument, ev: IDocumentEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IXMLDocument, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpXMLDocumentKeys: Set<string> = new Set([...rpDocumentKeys]);

export interface IXMLDocumentRps extends IDocumentRps {}

export function setXMLDocumentRps(instance: IXMLDocument, data: IXMLDocumentRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpXMLDocumentKeys.has(key)) {
      throw new Error(`${key} is not a property of XMLDocument`);
    }
    properties[key] = value;
  });
}
