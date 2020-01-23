import InternalHandler from '../InternalHandler';
import { IRadioNodeList, IElement, IHTMLFormControlsCollection } from '../interfaces';
import HTMLCollectionBase, { IHTMLCollectionBaseRps, rpHTMLCollectionBaseKeys } from './HTMLCollectionBase';

export default class HTMLFormControlsCollection extends HTMLCollectionBase implements IHTMLFormControlsCollection {
  public namedItem(name: string): IRadioNodeList | IElement | null {
    return InternalHandler.run<IHTMLFormControlsCollection, IRadioNodeList | IElement | null>(this, 'namedItem', [
      name,
    ]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLFormControlsCollectionKeys: Set<string> = new Set([...rpHTMLCollectionBaseKeys]);

export interface IHTMLFormControlsCollectionRps extends IHTMLCollectionBaseRps {}

export function setHTMLFormControlsCollectionRps(
  instance: IHTMLFormControlsCollection,
  data: IHTMLFormControlsCollectionRps,
): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLFormControlsCollectionKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLFormControlsCollection`);
    }
    properties[key] = value;
  });
}
