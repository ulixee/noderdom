import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { INodeList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeList, INodeListProperties>();
export const awaitedHandler = new AwaitedHandler<INodeList>('NodeList', getState, setState);
export const nodeAttacher = new NodeAttacher<INodeList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<INodeList, ISuperNode>(getState, setState, awaitedHandler);

export function NodeListGenerator() {
  return class NodeList implements INodeList, PromiseLike<INodeList> {
    constructor() {
      initializeConstantsAndProperties<NodeList>(this, NodeListConstantKeys, NodeListPropertyKeys);
      setState(this, {
        createInstanceName: 'createNodeList',
        createIterableName: 'createSuperNode',
      });
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public item(index: number): ISuperNode {
      throw new Error('NodeList.item not implemented');
    }

    public then<TResult1 = INodeList, TResult2 = never>(onfulfilled?: ((value: INodeList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public async forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void> {
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

    public [Symbol.iterator](): IterableIterator<ISuperNode> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
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
