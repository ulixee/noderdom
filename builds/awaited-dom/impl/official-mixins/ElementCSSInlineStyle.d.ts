import { IElementCSSInlineStyle, ICSSStyleDeclaration } from '../../base/interfaces/official';
import ElementCSSInlineStyleBase, { IElementCSSInlineStyleProperties } from '../../base/official-mixins/ElementCSSInlineStyle';
export declare const getState: (instance: IElementCSSInlineStyle) => IElementCSSInlineStyleProperties, setState: (instance: IElementCSSInlineStyle, properties: Partial<IElementCSSInlineStyleProperties>) => void;
export default class ElementCSSInlineStyle extends ElementCSSInlineStyleBase implements IElementCSSInlineStyle {
    get style(): ICSSStyleDeclaration;
}
