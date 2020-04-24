// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { INode } from '../interfaces/dom';
import { ISuperNodeList } from '../interfaces/supers';

export const { getState, setState, setHiddenState, setReadonlyOfSuperNodeList } = StateMachine<
  ISuperNodeList,
  ISuperNodeListProperties,
  ISuperNodeListReadonlyProperties
>('SuperNodeList');

export const awaitedHandler = new AwaitedHandler<ISuperNodeList>('SuperNodeList', getState, setState);

export default class SuperNodeList implements ISuperNodeList {
  constructor() {
    initializeConstantsAndProperties<SuperNodeList>(SuperNodeList, this, SuperNodeListConstantKeys, SuperNodeListPropertyKeys);
  }

  // properties

  public get length(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'length', false);
  }

  // methods

  public item(index: number): INode {
    throw new Error('SuperNodeList.item not implemented');
  }

  public forEach(callbackfn: (value: INode, key: number, parent: ISuperNodeList) => void, thisArg?: any): void {
    awaitedHandler.runMethod<void>(this, 'forEach', [callbackfn, thisArg]);
  }

  public entries(): IterableIterator<[number, INode]> {
    return awaitedHandler.runMethod<IterableIterator<[number, INode]>>(this, 'entries', []);
  }

  public keys(): IterableIterator<number> {
    return awaitedHandler.runMethod<IterableIterator<number>>(this, 'keys', []);
  }

  public values(): IterableIterator<INode> {
    return awaitedHandler.runMethod<IterableIterator<INode>>(this, 'values', []);
  }

  public [Symbol.iterator](): IterableIterator<INode> {
    return awaitedHandler.runMethod<IterableIterator<INode>>(this, '[Symbol.iterator]', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperNodeListReadonlyProperties {
  readonly length?: Promise<number>;
}

export interface ISuperNodeListProperties extends ISuperNodeListReadonlyProperties {}

export const SuperNodeListPropertyKeys = ['length'];

export const SuperNodeListConstantKeys = [];
