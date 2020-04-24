// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { ICSSStyleValue } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfCSSStyleValue } = StateMachine<
  ICSSStyleValue,
  ICSSStyleValueProperties,
  ICSSStyleValueReadonlyProperties
>('CSSStyleValue');

export const awaitedHandler = new AwaitedHandler<ICSSStyleValue>('CSSStyleValue', getState, setState);

export default class CSSStyleValue implements ICSSStyleValue {
  constructor() {
    initializeConstantsAndProperties<CSSStyleValue>(CSSStyleValue, this, CSSStyleValueConstantKeys, CSSStyleValuePropertyKeys);
  }

  // methods

  public toString(): Promise<string> {
    return awaitedHandler.runMethod<string>(this, 'toString', []);
  }
  // static methods

  public static parse(property: string, cssText: string): Promise<ICSSStyleValue> {
    return awaitedHandler.runStatic<ICSSStyleValue>(this, 'parse', [property, cssText]);
  }

  public static parseAll(property: string, cssText: string): Promise<Iterable<ICSSStyleValue>> {
    return awaitedHandler.runStatic<Iterable<ICSSStyleValue>>(this, 'parseAll', [property, cssText]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICSSStyleValueReadonlyProperties {}

export interface ICSSStyleValueProperties extends ICSSStyleValueReadonlyProperties {}

export const CSSStyleValuePropertyKeys = [];

export const CSSStyleValueConstantKeys = [];
