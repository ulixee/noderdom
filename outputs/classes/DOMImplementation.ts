import InternalHandler from '../InternalHandler';
import { IDocumentType, IXMLDocument, IDocument, IDOMImplementation } from '../interfaces';

export default class DOMImplementation implements IDOMImplementation {
  public createDocument(namespace: string | null, qualifiedName: string, doctype?: IDocumentType | null): IXMLDocument {
    return InternalHandler.run<IDOMImplementation, IXMLDocument>(this, 'createDocument', [namespace, qualifiedName, doctype]);
  }

  public createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType {
    return InternalHandler.run<IDOMImplementation, IDocumentType>(this, 'createDocumentType', [qualifiedName, publicId, systemId]);
  }

  public createHTMLDocument(title?: string): IDocument {
    return InternalHandler.run<IDOMImplementation, IDocument>(this, 'createHTMLDocument', [title]);
  }

  public hasFeature(): boolean {
    return InternalHandler.run<IDOMImplementation, boolean>(this, 'hasFeature', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDOMImplementationKeys: Set<string> = new Set([]);

export interface IDOMImplementationRps {}
