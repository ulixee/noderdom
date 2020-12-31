import StateMachine from '../../base/StateMachine';
import { IElementCSSInlineStyle, ICSSStyleDeclaration } from '../../base/interfaces/official';
import ElementCSSInlineStyleBase, { IElementCSSInlineStyleProperties } from '../../base/official-mixins/ElementCSSInlineStyle';
import { createCSSStyleDeclaration } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IElementCSSInlineStyle, IElementCSSInlineStyleProperties>();

export default class ElementCSSInlineStyle extends ElementCSSInlineStyleBase implements IElementCSSInlineStyle {
  public get style(): ICSSStyleDeclaration {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSStyleDeclaration(awaitedPath.addProperty('style'), awaitedOptions);
  }
}
