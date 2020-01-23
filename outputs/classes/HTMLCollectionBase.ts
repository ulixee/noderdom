import InternalHandler from '../InternalHandler';
import { IElement, IHTMLCollectionBase } from '../interfaces';

export default class HTMLCollectionBase implements IHTMLCollectionBase {
  protected readonly _: IHTMLCollectionBaseRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<IHTMLCollectionBase, number>(this, 'length');
  }

  // methods

  public item(index: number): IElement | null {
    return InternalHandler.run<IHTMLCollectionBase, IElement | null>(this, 'item', [index]);
  }

  [index: number]: IElement;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLCollectionBaseKeys: Set<string> = new Set([]);

export interface IHTMLCollectionBaseRps {
  readonly length?: number;
}

export function setHTMLCollectionBaseRps(instance: IHTMLCollectionBase, data: IHTMLCollectionBaseRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLCollectionBaseKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLCollectionBase`);
    }
    properties[key] = value;
  });
}
