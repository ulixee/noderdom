import Handler, { initializeConstantsAndPrototypes } from '../DynamicHandler';
import StateMachine from '../StateMachine';
import { IDocument, IHTMLCollection, IHTMLElement } from '../interfaces/dom';
// tslint:disable:variable-name

export const { getState, setState, setHiddenState, setReadonlyOfDocument } = StateMachine<
  IDocument,
  IDocumentProperties,
  IDocumentReadonlyProperties
>('Document');

export const handler = new Handler<IDocument>('Document', getState, setState);

export default class Document implements IDocument {
  constructor() {
    initializeConstantsAndPrototypes<Document>(Document, this, handler, DocumentConstantKeys, DocumentPropertyKeys);
  }
  // properties

  public get URL(): string {
    return handler.get<string>(this, 'URL', false);
  }

  public get anchors(): IHTMLCollection {
    return handler.get<IHTMLCollection>(this, 'anchors', false);
  }

  public get body(): IHTMLElement | null {
    return handler.get<IHTMLElement | null>(this, 'body', true);
  }

  public set body(value: IHTMLElement | null) {
    handler.set<IHTMLElement | null>(this, 'body', value);
  }

  public get characterSet(): string {
    return handler.get<string>(this, 'characterSet', false);
  }
}
// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDocumentReadonlyProperties {
  readonly URL?: string;
  readonly anchors?: IHTMLCollection;
  readonly characterSet?: string;
}

export interface IDocumentProperties extends IDocumentReadonlyProperties {
  body?: IHTMLElement | null;
}

export const DocumentPropertyKeys = ['URL', 'anchors', 'body', 'characterSet'];

export const DocumentConstantKeys = [];
