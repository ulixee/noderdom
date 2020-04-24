// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IDOMTokenList } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfDOMTokenList } = StateMachine<
  IDOMTokenList,
  IDOMTokenListProperties,
  IDOMTokenListReadonlyProperties
>('DOMTokenList');

export const awaitedHandler = new AwaitedHandler<IDOMTokenList>('DOMTokenList', getState, setState);

export default class DOMTokenList implements IDOMTokenList {
  constructor() {
    initializeConstantsAndProperties<DOMTokenList>(DOMTokenList, this, DOMTokenListConstantKeys, DOMTokenListPropertyKeys);
  }

  public forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): void {
    awaitedHandler.runMethod<void>(this, 'forEach', [callbackfn, thisArg]);
  }

  public entries(): IterableIterator<[number, string]> {
    return awaitedHandler.runMethod<IterableIterator<[number, string]>>(this, 'entries', []);
  }

  public keys(): IterableIterator<number> {
    return awaitedHandler.runMethod<IterableIterator<number>>(this, 'keys', []);
  }

  public values(): IterableIterator<string> {
    return awaitedHandler.runMethod<IterableIterator<string>>(this, 'values', []);
  }

  public [Symbol.iterator](): IterableIterator<string> {
    return awaitedHandler.runMethod<IterableIterator<string>>(this, '[Symbol.iterator]', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMTokenListReadonlyProperties {}

export interface IDOMTokenListProperties extends IDOMTokenListReadonlyProperties {}

export const DOMTokenListPropertyKeys = [];

export const DOMTokenListConstantKeys = [];
