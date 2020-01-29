import InternalHandler from '../InternalHandler';
import { ICSSStyleDeclaration, IElementCSSInlineStyle } from '../interfaces';

export default class ElementCSSInlineStyle implements IElementCSSInlineStyle {
  public get style(): ICSSStyleDeclaration {
    return InternalHandler.get<IElementCSSInlineStyle, ICSSStyleDeclaration>(this, 'style');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IElementCSSInlineStyleProperties {
  style?: ICSSStyleDeclaration;
}

export interface IElementCSSInlineStyleReadonlyProperties {
  style?: ICSSStyleDeclaration;
}
