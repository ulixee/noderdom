import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ICSSStyleValue } from '../../awaited-base/interfaces/official';
import { CSSStyleValueGenerator, initialize, ICSSStyleValueProperties } from '../../awaited-base/official-klasses/CSSStyleValue';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICSSStyleValue, ICSSStyleValueProperties>();
const CSSStyleValueBase = CSSStyleValueGenerator();

export default class CSSStyleValue extends CSSStyleValueBase implements ICSSStyleValue {
  constructor() {
    super();
    initialize(CSSStyleValue, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createCSSStyleValue(awaitedPath: AwaitedPath, awaitedOptions: any): CSSStyleValue {
  const instance = new CSSStyleValue();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
