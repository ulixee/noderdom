import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import { INodeList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
export const awaitedHandler = new AwaitedHandler<INodeList>('NodeList', getState, setState);
const awaitedIterator = new AwaitedIterator<INodeList, ISuperNode>('createSuperNode', getState);

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

    public forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void> {
      return awaitedIterator.createInstance(this, this.length).then(x => {
        for (let i = 0; i < x.length; i += 1) {
          callbackfn(x[i], i, this);
        }
      });
    }

    public entries(): Promise<IterableIterator<[number, ISuperNode]>> {
      return awaitedIterator.createInstance(this, this.length).then(x => x.entries());
    }

    public keys(): Promise<IterableIterator<number>> {
      return awaitedIterator.createInstance(this, this.length).then(x => x.keys());
    }

    public values(): Promise<IterableIterator<ISuperNode>> {
      return awaitedIterator.createInstance(this, this.length).then(x => x.values());
    }

    public *[Symbol.iterator](): IterableIterator<ISuperNode> {
      return awaitedIterator.createInstance(this, this.length).then(x => yield x[Symbol.iterator]);
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
