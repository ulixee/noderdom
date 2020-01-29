import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ISupportedType, IDocument, IDOMParser } from '../interfaces';

export default class DOMParser implements IDOMParser {
  public parseFromString(str: string, type: ISupportedType): IDocument {
    return InternalHandler.run<IDOMParser, IDocument>(this, 'parseFromString', [str, type]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDOMParserProperties {}

export interface IDOMParserReadonlyProperties {}

export const { getState, setState, setReadonlyOfDOMParser } = InternalStateGenerator<
  IDOMParser,
  IDOMParserProperties,
  IDOMParserReadonlyProperties
>('DOMParser');
