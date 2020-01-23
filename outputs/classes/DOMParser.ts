import InternalHandler from '../InternalHandler';
import { ISupportedType, IDocument, IDOMParser } from '../interfaces';

export default class DOMParser implements IDOMParser {
  public parseFromString(str: string, type: ISupportedType): IDocument {
    return InternalHandler.run<IDOMParser, IDocument>(this, 'parseFromString', [str, type]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDOMParserKeys: Set<string> = new Set([]);

export interface IDOMParserRps {}
