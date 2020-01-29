import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ISVGStringList } from '../interfaces';

export default class SVGStringList implements ISVGStringList {
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

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISVGStringListProperties {
  length?: number;
  numberOfItems?: number;
}

export interface ISVGStringListReadonlyProperties {
  length?: number;
  numberOfItems?: number;
}

export const { getState, setState, setReadonlyOfSVGStringList } = InternalStateGenerator<
  ISVGStringList,
  ISVGStringListProperties,
  ISVGStringListReadonlyProperties
>('SVGStringList');
