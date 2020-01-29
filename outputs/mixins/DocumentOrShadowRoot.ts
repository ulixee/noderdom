import InternalHandler from '../InternalHandler';
import { IElement, IDocumentOrShadowRoot } from '../interfaces';

export default class DocumentOrShadowRoot implements IDocumentOrShadowRoot {
  public get activeElement(): IElement | null {
    return InternalHandler.get<IDocumentOrShadowRoot, IElement | null>(this, 'activeElement');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDocumentOrShadowRootProperties {
  activeElement?: IElement | null;
}

export interface IDocumentOrShadowRootReadonlyProperties {
  activeElement?: IElement | null;
}
