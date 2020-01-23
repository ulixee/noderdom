import InternalHandler from '../InternalHandler';
import { IElement, INonDocumentTypeChildNode } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function NonDocumentTypeChildNode<TBase extends Constructor>(base: TBase) {
  return class extends base implements INonDocumentTypeChildNode {
    public get nextElementSibling(): IElement | null {
      return InternalHandler.get<INonDocumentTypeChildNode, IElement | null>(this, 'nextElementSibling');
    }

    public get previousElementSibling(): IElement | null {
      return InternalHandler.get<INonDocumentTypeChildNode, IElement | null>(this, 'previousElementSibling');
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpNonDocumentTypeChildNodeKeys: Set<string> = new Set([]);

export interface INonDocumentTypeChildNodeRps {
  readonly nextElementSibling?: IElement | null;
  readonly previousElementSibling?: IElement | null;
}
