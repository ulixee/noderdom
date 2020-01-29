import InternalHandler from '../InternalHandler';
import { IElement, INonDocumentTypeChildNode } from '../interfaces';

export default class NonDocumentTypeChildNode implements INonDocumentTypeChildNode {
  public get nextElementSibling(): IElement | null {
    return InternalHandler.get<INonDocumentTypeChildNode, IElement | null>(this, 'nextElementSibling');
  }

  public get previousElementSibling(): IElement | null {
    return InternalHandler.get<INonDocumentTypeChildNode, IElement | null>(this, 'previousElementSibling');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface INonDocumentTypeChildNodeProperties {
  nextElementSibling?: IElement | null;
  previousElementSibling?: IElement | null;
}

export interface INonDocumentTypeChildNodeReadonlyProperties {
  nextElementSibling?: IElement | null;
  previousElementSibling?: IElement | null;
}
