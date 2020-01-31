import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IDOMRect, IDOMRectList } from '../interfaces';

export default class DOMRectList implements IDOMRectList {
  public get length(): number {
    return InternalHandler.get<IDOMRectList, number>(this, 'length');
  }

  // methods

  public item(index: number): IDOMRect | null {
    return InternalHandler.run<IDOMRectList, IDOMRect | null>(this, 'item', [index]);
  }

  public [Symbol.iterator](): IterableIterator<IDOMRect> {
    return InternalHandler.run<IDOMRectList, IterableIterator<IDOMRect>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: IDOMRect;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDOMRectListProperties {
  length?: number;
}

export interface IDOMRectListReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfDOMRectList } = InternalStateGenerator<
  IDOMRectList,
  IDOMRectListProperties,
  IDOMRectListReadonlyProperties
>('DOMRectList');
