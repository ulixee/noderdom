import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { INodeList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<INodeList, INodeListProperties>();
export const awaitedHandler = new AwaitedHandler<INodeList>('NodeList', getState, setState);
export const nodeFactory = new NodeFactory<INodeList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<INodeList, ISuperNode>(getState, setState, awaitedHandler);

export function NodeListGenerator() {
  return class NodeList implements INodeList, PromiseLike<INodeList> {
    constructor() {
      initializeConstantsAndProperties<NodeList>(this, NodeListConstantKeys, NodeListPropertyKeys);
      setState(this, {
        createInstanceName: 'createNodeList',
        createIterableName: 'createSuperNode',
      });
      // proxy supports indexed property access
      const proxy = new Proxy(this, {
        get(target, prop) {
          if (prop in target) {
            // @ts-ignore
            const value: any = target[prop];
            if (typeof value === 'function') return value.bind(target);
            return value;
          }

          // delegate to indexer property
          if (!isNaN(prop as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
          }
        },
      });

      recordProxy(proxy, this);
      return proxy;
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
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
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
      return awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
    }

    [index: number]: ISuperNode;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INodeListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const NodeListPropertyKeys = ['length'];

export const NodeListConstantKeys = [];
