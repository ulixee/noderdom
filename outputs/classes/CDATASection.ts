import { ICDATASection } from '../interfaces';
import Text, { ITextRps, rpTextKeys } from './Text';

export default class CDATASection extends Text implements ICDATASection {}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpCDATASectionKeys: Set<string> = new Set([...rpTextKeys]);

export interface ICDATASectionRps extends ITextRps {}

export function setCDATASectionRps(instance: ICDATASection, data: ICDATASectionRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpCDATASectionKeys.has(key)) {
      throw new Error(`${key} is not a property of CDATASection`);
    }
    properties[key] = value;
  });
}
