import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { INodeList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
export const awaitedHandler = new AwaitedHandler<INodeList>('NodeList', getState, setState);

export function NodeListGenerator() {
  return class NodeList implements INodeList {
    constructor() {
      initializeConstantsAndProperties<NodeList>(this, NodeListConstantKeys, NodeListPropertyKeys);
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public item(index: number): Promise<ISuperNode | null> {
      return awaitedHandler.runMethod<ISuperNode | null>(this, 'item', [index]);
    }

    public forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): void {
      throw new Error('NodeList.forEach not implemented');
    }

    public entries(): IterableIterator<[number, ISuperNode]> {
      throw new Error('NodeList.entries not implemented');
    }

    public keys(): IterableIterator<number> {
      throw new Error('NodeList.keys not implemented');
    }

    public values(): IterableIterator<ISuperNode> {
      throw new Error('NodeList.values not implemented');
    }

    public [Symbol.iterator](): IterableIterator<ISuperNode> {
      throw new Error('NodeList[Symbol.iterator] not implemented');
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INodeListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly length?: Promise<number>;
}

export const NodeListPropertyKeys = ['length'];

export const NodeListConstantKeys = [];
