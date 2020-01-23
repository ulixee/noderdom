import InternalHandler from '../InternalHandler';
import { IHTMLOptionElement, IHTMLOptGroupElement, IHTMLElement, IHTMLOptionsCollection } from '../interfaces';
import HTMLCollection, { IHTMLCollectionRps, rpHTMLCollectionKeys } from './HTMLCollection';

export default class HTMLOptionsCollection extends HTMLCollection implements IHTMLOptionsCollection {
  public get length(): number {
    return InternalHandler.get<IHTMLOptionsCollection, number>(this, 'length');
  }

  public set length(value: number) {
    InternalHandler.set<IHTMLOptionsCollection, number>(this, 'length', value);
  }

  public get selectedIndex(): number {
    return InternalHandler.get<IHTMLOptionsCollection, number>(this, 'selectedIndex');
  }

  public set selectedIndex(value: number) {
    InternalHandler.set<IHTMLOptionsCollection, number>(this, 'selectedIndex', value);
  }

  // methods

  public add(element: IHTMLOptionElement | IHTMLOptGroupElement, before?: IHTMLElement | number | null): void {
    InternalHandler.run<IHTMLOptionsCollection, void>(this, 'add', [element, before]);
  }

  public remove(index: number): void {
    InternalHandler.run<IHTMLOptionsCollection, void>(this, 'remove', [index]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLOptionsCollectionKeys: Set<string> = new Set([...rpHTMLCollectionKeys]);

export interface IHTMLOptionsCollectionRps extends IHTMLCollectionRps {}

export function setHTMLOptionsCollectionRps(instance: IHTMLOptionsCollection, data: IHTMLOptionsCollectionRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLOptionsCollectionKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLOptionsCollection`);
    }
    properties[key] = value;
  });
}
