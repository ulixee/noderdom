import InternalHandler from '../InternalHandler';
import { ISVGStringList } from '../interfaces';

export default class SVGStringList implements ISVGStringList {
  protected readonly _: ISVGStringListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<ISVGStringList, number>(this, 'length');
  }

  public get numberOfItems(): number {
    return InternalHandler.get<ISVGStringList, number>(this, 'numberOfItems');
  }

  // methods

  public appendItem(newItem: string): string {
    return InternalHandler.run<ISVGStringList, string>(this, 'appendItem', [newItem]);
  }

  public clear(): void {
    InternalHandler.run<ISVGStringList, void>(this, 'clear', []);
  }

  public getItem(index: number): string {
    return InternalHandler.run<ISVGStringList, string>(this, 'getItem', [index]);
  }

  public initialize(newItem: string): string {
    return InternalHandler.run<ISVGStringList, string>(this, 'initialize', [newItem]);
  }

  public insertItemBefore(newItem: string, index: number): string {
    return InternalHandler.run<ISVGStringList, string>(this, 'insertItemBefore', [newItem, index]);
  }

  public removeItem(index: number): string {
    return InternalHandler.run<ISVGStringList, string>(this, 'removeItem', [index]);
  }

  public replaceItem(newItem: string, index: number): string {
    return InternalHandler.run<ISVGStringList, string>(this, 'replaceItem', [newItem, index]);
  }

  [index: number]: string;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSVGStringListKeys: Set<string> = new Set([]);

export interface ISVGStringListRps {
  readonly length?: number;
  readonly numberOfItems?: number;
}

export function setSVGStringListRps(instance: ISVGStringList, data: ISVGStringListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpSVGStringListKeys.has(key)) {
      throw new Error(`${key} is not a property of SVGStringList`);
    }
    properties[key] = value;
  });
}
