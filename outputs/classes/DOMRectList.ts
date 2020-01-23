import InternalHandler from '../InternalHandler';
import { IDOMRect, IDOMRectList } from '../interfaces';

export default class DOMRectList implements IDOMRectList {
  protected readonly _: IDOMRectListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<IDOMRectList, number>(this, 'length');
  }

  // methods

  public item(index: number): IDOMRect | null {
    return InternalHandler.run<IDOMRectList, IDOMRect | null>(this, 'item', [index]);
  }

  [index: number]: IDOMRect;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDOMRectListKeys: Set<string> = new Set([]);

export interface IDOMRectListRps {
  readonly length?: number;
}

export function setDOMRectListRps(instance: IDOMRectList, data: IDOMRectListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpDOMRectListKeys.has(key)) {
      throw new Error(`${key} is not a property of DOMRectList`);
    }
    properties[key] = value;
  });
}
