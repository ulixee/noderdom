import Constructable from '../Constructable';
import InternalStateGenerator from '../InternalStateGenerator';
import { IText, ICDATASection } from '../interfaces';
import { ITextProperties, ITextReadonlyProperties } from './Text';

// tslint:disable-next-line:variable-name
export function CDATASectionGenerator(Text: Constructable<IText>) {
  return class CDATASection extends Text implements ICDATASection {};
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ICDATASectionProperties extends ITextProperties {}

export interface ICDATASectionReadonlyProperties extends ITextReadonlyProperties {}

export const { getState, setState, setReadonlyOfCDATASection } = InternalStateGenerator<
  ICDATASection,
  ICDATASectionProperties,
  ICDATASectionReadonlyProperties
>('CDATASection');
