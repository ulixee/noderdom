import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { ICSSStyleSheetIsolate } from '../interfaces/isolate';
import { ICSSRuleList, ICSSRule } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICSSStyleSheetIsolate, ICSSStyleSheetIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<ICSSStyleSheetIsolate>('CSSStyleSheetIsolate', getState, setState);

export default class CSSStyleSheetIsolate implements ICSSStyleSheetIsolate {
  public get cssRules(): ICSSRuleList {
    throw new Error('CSSStyleSheetIsolate.cssRules getter not implemented');
  }

  public get ownerRule(): ICSSRule {
    throw new Error('CSSStyleSheetIsolate.ownerRule getter not implemented');
  }

  // methods

  public deleteRule(index: number): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'deleteRule', [index]);
  }

  public insertRule(rule: string, index?: number): Promise<number> {
    return awaitedHandler.runMethod<number>(this, 'insertRule', [rule, index]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICSSStyleSheetIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly cssRules?: ICSSRuleList;
  readonly ownerRule?: ICSSRule;
}

export const CSSStyleSheetIsolatePropertyKeys = ['cssRules', 'ownerRule'];

export const CSSStyleSheetIsolateConstantKeys = [];
