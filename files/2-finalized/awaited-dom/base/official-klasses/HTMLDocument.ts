import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLDocument, IDocument } from '../interfaces/official';
import { IDocumentProperties, DocumentPropertyKeys, DocumentConstantKeys } from './Document';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDocument, IHTMLDocumentProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDocument>('HTMLDocument', getState, setState);

export function HTMLDocumentGenerator(Document: Constructable<IDocument>) {
  return class HTMLDocument extends Document implements IHTMLDocument {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLDocument>(this, HTMLDocumentConstantKeys, HTMLDocumentPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDocumentProperties extends IDocumentProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLDocumentPropertyKeys = [...DocumentPropertyKeys];

export const HTMLDocumentConstantKeys = [...DocumentConstantKeys];
