// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { INodeList, INode } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfNodeList } = StateMachine<
  INodeList,
  INodeListProperties,
  INodeListReadonlyProperties
>('NodeList');

export const awaitedHandler = new AwaitedHandler<INodeList>('NodeList', getState, setState);

export default class NodeList implements INodeList {
  constructor() {
    initializeConstantsAndProperties<NodeList>(NodeList, this, NodeListConstantKeys, NodeListPropertyKeys);
  }

  // properties

  public get length(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'length', false);
  }

  // methods

  public item(index: number): INode {
    throw new Error('NodeList.item not implemented');
  }

  public forEach(callbackfn: (value: INode, key: number, parent: INodeList) => void, thisArg?: any): void {
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

export interface INodeListReadonlyProperties {
  readonly length?: Promise<number>;
}

export interface INodeListProperties extends INodeListReadonlyProperties {}

export const NodeListPropertyKeys = ['length'];

export const NodeListConstantKeys = [];
