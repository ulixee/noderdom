import InternalHandler from '../InternalHandler';
import { ICSSStyleDeclaration, IElementCSSInlineStyle } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ElementCSSInlineStyle<TBase extends Constructor>(base: TBase) {
  return class extends base implements IElementCSSInlineStyle {
    public get style(): ICSSStyleDeclaration {
      return InternalHandler.get<IElementCSSInlineStyle, ICSSStyleDeclaration>(this, 'style');
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpElementCSSInlineStyleKeys: Set<string> = new Set([]);

export interface IElementCSSInlineStyleRps {
  readonly style?: ICSSStyleDeclaration;
}
