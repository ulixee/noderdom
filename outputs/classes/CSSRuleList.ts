import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ICSSRule, ICSSRuleList } from '../interfaces';

export default class CSSRuleList implements ICSSRuleList {
  public get length(): number {
    return InternalHandler.get<ICSSRuleList, number>(this, 'length');
  }

  // methods

  public item(index: number): ICSSRule | null {
    return InternalHandler.run<ICSSRuleList, ICSSRule | null>(this, 'item', [index]);
  }

  public [Symbol.iterator](): IterableIterator<ICSSRule> {
    return InternalHandler.run<ICSSRuleList, IterableIterator<ICSSRule>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: ICSSRule;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ICSSRuleListProperties {
  length?: number;
}

export interface ICSSRuleListReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfCSSRuleList } = InternalStateGenerator<
  ICSSRuleList,
  ICSSRuleListProperties,
  ICSSRuleListReadonlyProperties
>('CSSRuleList');
