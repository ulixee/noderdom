import InternalHandler from '../InternalHandler';
import { ICSSRule, ICSSRuleList, ICSSStyleSheet } from '../interfaces';
import StyleSheet, { IStyleSheetRps, rpStyleSheetKeys } from './StyleSheet';

export default class CSSStyleSheet extends StyleSheet implements ICSSStyleSheet {
  protected readonly _: ICSSStyleSheetRps = {};

  // properties

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
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpCSSStyleSheetKeys: Set<string> = new Set([...rpStyleSheetKeys]);

export interface ICSSStyleSheetRps extends IStyleSheetRps {
  readonly cssRules?: ICSSRuleList;
  readonly ownerRule?: ICSSRule | null;
}

export function setCSSStyleSheetRps(instance: ICSSStyleSheet, data: ICSSStyleSheetRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpCSSStyleSheetKeys.has(key)) {
      throw new Error(`${key} is not a property of CSSStyleSheet`);
    }
    properties[key] = value;
  });
}
