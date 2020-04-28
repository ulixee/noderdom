import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { INodeList, INode } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
export const awaitedHandler = new AwaitedHandler<INodeList>('NodeList', getState, setState);

export function NodeListGenerator() {
  return class NodeList implements INodeList {
    constructor() {
      initialize(NodeList, this);
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
      throw new Error('NodeList.forEach not implemented');
    }

    public entries(): IterableIterator<[number, INode]> {
      throw new Error('NodeList.entries not implemented');
    }

    public keys(): IterableIterator<number> {
      throw new Error('NodeList.keys not implemented');
    }

    public values(): IterableIterator<INode> {
      throw new Error('NodeList.values not implemented');
    }

    public [Symbol.iterator](): IterableIterator<INode> {
      throw new Error('NodeList[Symbol.iterator] not implemented');
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INodeListProperties {
  readonly length?: Promise<number>;
}

export const NodeListPropertyKeys = ['length'];

export const NodeListConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<INodeList>, self: INodeList) {
  initializeConstantsAndProperties<INodeList>(Klass, self, NodeListConstantKeys, NodeListPropertyKeys);
}
