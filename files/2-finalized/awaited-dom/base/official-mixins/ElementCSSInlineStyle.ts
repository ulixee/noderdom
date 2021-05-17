import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IElementCSSInlineStyle, ICSSStyleDeclaration } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IElementCSSInlineStyle, IElementCSSInlineStyleProperties>();
export const awaitedHandler = new AwaitedHandler<IElementCSSInlineStyle>('ElementCSSInlineStyle', getState, setState);

export default class ElementCSSInlineStyle implements IElementCSSInlineStyle {
  public get style(): ICSSStyleDeclaration {
    throw new Error('ElementCSSInlineStyle.style getter not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IElementCSSInlineStyleProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly style?: ICSSStyleDeclaration;
}

export const ElementCSSInlineStylePropertyKeys = ['style'];

export const ElementCSSInlineStyleConstantKeys = [];
