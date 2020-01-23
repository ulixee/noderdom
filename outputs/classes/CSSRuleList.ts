import InternalHandler from '../InternalHandler';
import { ICSSRule, ICSSRuleList } from '../interfaces';

export default class CSSRuleList implements ICSSRuleList {
  protected readonly _: ICSSRuleListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<ICSSRuleList, number>(this, 'length');
  }

  // methods

  public item(index: number): ICSSRule | null {
    return InternalHandler.run<ICSSRuleList, ICSSRule | null>(this, 'item', [index]);
  }

  [index: number]: ICSSRule;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpCSSRuleListKeys: Set<string> = new Set([]);

export interface ICSSRuleListRps {
  readonly length?: number;
}

export function setCSSRuleListRps(instance: ICSSRuleList, data: ICSSRuleListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpCSSRuleListKeys.has(key)) {
      throw new Error(`${key} is not a property of CSSRuleList`);
    }
    properties[key] = value;
  });
}
