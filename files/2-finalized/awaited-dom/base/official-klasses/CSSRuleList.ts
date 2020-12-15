import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ICSSRuleList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICSSRuleList, ICSSRuleListProperties>();
export const awaitedHandler = new AwaitedHandler<ICSSRuleList>('CSSRuleList', getState, setState);

export function CSSRuleListGenerator() {
  return class CSSRuleList implements ICSSRuleList {
    constructor() {
      initializeConstantsAndProperties<CSSRuleList>(this, CSSRuleListConstantKeys, CSSRuleListPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICSSRuleListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const CSSRuleListPropertyKeys = [];

export const CSSRuleListConstantKeys = [];
