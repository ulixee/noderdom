import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { ISuperNodeList, ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNodeList, ISuperNodeListProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperNodeList>('SuperNodeList', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperNodeList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<ISuperNodeList, ISuperNode>(getState, setState, awaitedHandler);

export function SuperNodeListGenerator() {
  return class SuperNodeList implements ISuperNodeList, PromiseLike<ISuperNodeList> {
    constructor() {
      initializeConstantsAndProperties<SuperNodeList>(this, SuperNodeListConstantKeys, SuperNodeListPropertyKeys);
      setState(this, {
        createInstanceName: 'createSuperNodeList',
        createIterableName: 'createSuperNode',
      });
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public item(index: number): ISuperNode {
      throw new Error('SuperNodeList.item not implemented');
    }

    public then<TResult1 = ISuperNodeList, TResult2 = never>(onfulfilled?: ((value: ISuperNodeList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public async forEach(callbackfn: (value: ISuperNode, key: number, parent: ISuperNodeList) => void, thisArg?: any): Promise<void> {
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

export interface ISuperNodeListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly length?: Promise<number>;
}

export const SuperNodeListPropertyKeys = ['length'];

export const SuperNodeListConstantKeys = [];
