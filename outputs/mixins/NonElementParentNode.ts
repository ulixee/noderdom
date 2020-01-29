import InternalHandler from '../InternalHandler';
import { IElement, INonElementParentNode } from '../interfaces';

export default class NonElementParentNode implements INonElementParentNode {
  public getElementById(elementId: string): IElement | null {
    return InternalHandler.run<INonElementParentNode, IElement | null>(this, 'getElementById', [elementId]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface INonElementParentNodeProperties {}

export interface INonElementParentNodeReadonlyProperties {}
