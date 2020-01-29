import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ICSSRule, ICSSStyleSheet } from '../interfaces';

export default class CSSRule implements ICSSRule {
  public static readonly CHARSET_RULE: number = 2;
  public static readonly FONT_FACE_RULE: number = 5;
  public static readonly IMPORT_RULE: number = 3;
  public static readonly MARGIN_RULE: number = 9;
  public static readonly MEDIA_RULE: number = 4;
  public static readonly NAMESPACE_RULE: number = 10;
  public static readonly PAGE_RULE: number = 6;
  public static readonly STYLE_RULE: number = 1;

  public readonly CHARSET_RULE: number = 2;
  public readonly FONT_FACE_RULE: number = 5;
  public readonly IMPORT_RULE: number = 3;
  public readonly MARGIN_RULE: number = 9;
  public readonly MEDIA_RULE: number = 4;
  public readonly NAMESPACE_RULE: number = 10;
  public readonly PAGE_RULE: number = 6;
  public readonly STYLE_RULE: number = 1;

  // properties

  public get cssText(): string {
    return InternalHandler.get<ICSSRule, string>(this, 'cssText');
  }

  public set cssText(value: string) {
    InternalHandler.set<ICSSRule, string>(this, 'cssText', value);
  }

  public get parentRule(): ICSSRule | null {
    return InternalHandler.get<ICSSRule, ICSSRule | null>(this, 'parentRule');
  }

  public get parentStyleSheet(): ICSSStyleSheet | null {
    return InternalHandler.get<ICSSRule, ICSSStyleSheet | null>(this, 'parentStyleSheet');
  }

  public get type(): number {
    return InternalHandler.get<ICSSRule, number>(this, 'type');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ICSSRuleProperties {
  cssText?: string;
  parentRule?: ICSSRule | null;
  parentStyleSheet?: ICSSStyleSheet | null;
  type?: number;
}

export interface ICSSRuleReadonlyProperties {
  parentRule?: ICSSRule | null;
  parentStyleSheet?: ICSSStyleSheet | null;
  type?: number;
}

export const { getState, setState, setReadonlyOfCSSRule } = InternalStateGenerator<
  ICSSRule,
  ICSSRuleProperties,
  ICSSRuleReadonlyProperties
>('CSSRule');
