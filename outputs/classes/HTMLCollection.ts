import InternalHandler from '../InternalHandler';
import { IElement, IHTMLCollection } from '../interfaces';
import HTMLCollectionBase, { IHTMLCollectionBaseRps, rpHTMLCollectionBaseKeys } from './HTMLCollectionBase';

export default class HTMLCollection<T extends IElement = IElement> extends HTMLCollectionBase implements IHTMLCollection<T> {
  public namedItem(name: string): T | null {
    return InternalHandler.run<IHTMLCollection<T>, T | null>(this, 'namedItem', [name]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLCollectionKeys: Set<string> = new Set([...rpHTMLCollectionBaseKeys]);

export interface IHTMLCollectionRps extends IHTMLCollectionBaseRps {}

export function setHTMLCollectionRps(instance: IHTMLCollection<IElement>, data: IHTMLCollectionRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLCollectionKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLCollection`);
    }
    properties[key] = value;
  });
}
