import InternalHandler from '../InternalHandler';
import { IElement, INonElementParentNode } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function NonElementParentNode<TBase extends Constructor>(base: TBase) {
  return class extends base implements INonElementParentNode {
    public getElementById(elementId: string): IElement | null {
      return InternalHandler.run<INonElementParentNode, IElement | null>(this, 'getElementById', [elementId]);
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpNonElementParentNodeKeys: Set<string> = new Set([]);

export interface INonElementParentNodeRps {}
