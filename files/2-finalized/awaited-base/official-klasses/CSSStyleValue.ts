import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { ICSSStyleValue } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICSSStyleValue, ICSSStyleValueProperties>();
export const awaitedHandler = new AwaitedHandler<ICSSStyleValue>('CSSStyleValue', getState, setState);

export function CSSStyleValueGenerator() {
  return class CSSStyleValue implements ICSSStyleValue {
    constructor() {
      initialize(CSSStyleValue, this);
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
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICSSStyleValueProperties {}

export const CSSStyleValuePropertyKeys = [];

export const CSSStyleValueConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ICSSStyleValue>, self: ICSSStyleValue) {
  initializeConstantsAndProperties<ICSSStyleValue>(Klass, self, CSSStyleValueConstantKeys, CSSStyleValuePropertyKeys);
}
