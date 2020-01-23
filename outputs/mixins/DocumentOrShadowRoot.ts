import InternalHandler from '../InternalHandler';
import { IElement, IDocumentOrShadowRoot } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function DocumentOrShadowRoot<TBase extends Constructor>(base: TBase) {
  return class extends base implements IDocumentOrShadowRoot {
    public get activeElement(): IElement | null {
      return InternalHandler.get<IDocumentOrShadowRoot, IElement | null>(this, 'activeElement');
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDocumentOrShadowRootKeys: Set<string> = new Set([]);

export interface IDocumentOrShadowRootRps {
  readonly activeElement?: IElement | null;
}
