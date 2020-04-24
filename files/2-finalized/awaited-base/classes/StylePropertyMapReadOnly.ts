// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IStylePropertyMapReadOnly } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfStylePropertyMapReadOnly } = StateMachine<
  IStylePropertyMapReadOnly,
  IStylePropertyMapReadOnlyProperties,
  IStylePropertyMapReadOnlyReadonlyProperties
>('StylePropertyMapReadOnly');

export const awaitedHandler = new AwaitedHandler<IStylePropertyMapReadOnly>('StylePropertyMapReadOnly', getState, setState);

export default class StylePropertyMapReadOnly implements IStylePropertyMapReadOnly {
  constructor() {
    initializeConstantsAndProperties<StylePropertyMapReadOnly>(StylePropertyMapReadOnly, this, StylePropertyMapReadOnlyConstantKeys, StylePropertyMapReadOnlyPropertyKeys);
  }

  public forEach(callbackfn: (value: Iterable<ICSSStyleValue>, key: string, parent: IStylePropertyMapReadOnly) => void, thisArg?: any): void {
    awaitedHandler.runMethod<void>(this, 'forEach', [callbackfn, thisArg]);
  }

  public entries(): IterableIterator<[string, Iterable<ICSSStyleValue>]> {
    return awaitedHandler.runMethod<IterableIterator<[string, Iterable<ICSSStyleValue>]>>(this, 'entries', []);
  }

  public keys(): IterableIterator<string> {
    return awaitedHandler.runMethod<IterableIterator<string>>(this, 'keys', []);
  }

  public values(): IterableIterator<Iterable<ICSSStyleValue>> {
    return awaitedHandler.runMethod<IterableIterator<Iterable<ICSSStyleValue>>>(this, 'values', []);
  }

  public [Symbol.iterator](): IterableIterator<[string, Iterable<ICSSStyleValue>]> {
    return awaitedHandler.runMethod<IterableIterator<[string, Iterable<ICSSStyleValue>]>>(this, '[Symbol.iterator]', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStylePropertyMapReadOnlyReadonlyProperties {}

export interface IStylePropertyMapReadOnlyProperties extends IStylePropertyMapReadOnlyReadonlyProperties {}

export const StylePropertyMapReadOnlyPropertyKeys = [];

export const StylePropertyMapReadOnlyConstantKeys = [];
