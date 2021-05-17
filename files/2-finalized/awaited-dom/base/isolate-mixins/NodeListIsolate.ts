import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import { INodeListIsolate } from '../interfaces/isolate';
import { ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeListIsolate, INodeListIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<INodeListIsolate>('NodeListIsolate', getState, setState);
export const awaitedIterator = new AwaitedIterator<INodeListIsolate, ISuperNode>(getState, setState, awaitedHandler);

export default class NodeListIsolate implements INodeListIsolate {
  public get length(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'length', false);
  }

  // methods

  public item(index: number): ISuperNode {
    throw new Error('NodeListIsolate.item not implemented');
  }

  public async forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeListIsolate) => void, thisArg?: any): Promise<void> {
    for (const [key, value] of await this.entries()) {
      callbackfn.call(thisArg, value, key, this);
    }
  }

  public entries(): Promise<IterableIterator<[number, ISuperNode]>> {
    return awaitedIterator.load(this).then(x => x.entries());
  }

  public keys(): Promise<IterableIterator<number>> {
    return awaitedIterator.load(this).then(x => x.keys());
  }

  public values(): Promise<IterableIterator<ISuperNode>> {
    return awaitedIterator.load(this).then(x => x.values());
  }

  public [Symbol.iterator](): Iterator<ISuperNode> {
    return awaitedIterator.iterateNodePointers(this);
  }

  [index: number]: ISuperNode;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INodeListIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const NodeListIsolatePropertyKeys = ['length'];

export const NodeListIsolateConstantKeys = [];
