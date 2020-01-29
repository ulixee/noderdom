import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IStyleSheet, ICSSRule, ICSSRuleList, ICSSStyleSheet } from '../interfaces';
import { IStyleSheetProperties, IStyleSheetReadonlyProperties } from './StyleSheet';

// tslint:disable-next-line:variable-name
export function CSSStyleSheetGenerator(StyleSheet: Constructable<IStyleSheet>) {
  return class CSSStyleSheet extends StyleSheet implements ICSSStyleSheet {
    public get cssRules(): ICSSRuleList {
      return InternalHandler.get<ICSSStyleSheet, ICSSRuleList>(this, 'cssRules');
    }

    public get ownerRule(): ICSSRule | null {
      return InternalHandler.get<ICSSStyleSheet, ICSSRule | null>(this, 'ownerRule');
    }

    // methods

    public deleteRule(index: number): void {
      InternalHandler.run<ICSSStyleSheet, void>(this, 'deleteRule', [index]);
    }

    public insertRule(rule: string, index?: number): number {
      return InternalHandler.run<ICSSStyleSheet, number>(this, 'insertRule', [rule, index]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ICSSStyleSheetProperties extends IStyleSheetProperties {
  cssRules?: ICSSRuleList;
  ownerRule?: ICSSRule | null;
}

export interface ICSSStyleSheetReadonlyProperties extends IStyleSheetReadonlyProperties {
  cssRules?: ICSSRuleList;
  ownerRule?: ICSSRule | null;
}

export const { getState, setState, setReadonlyOfCSSStyleSheet } = InternalStateGenerator<
  ICSSStyleSheet,
  ICSSStyleSheetProperties,
  ICSSStyleSheetReadonlyProperties
>('CSSStyleSheet');
