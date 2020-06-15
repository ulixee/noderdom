import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import { ISuperNodeList, ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNodeList, ISuperNodeListProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperNodeList>('SuperNodeList', getState, setState);
const awaitedIterator = new AwaitedIterator<ISuperNodeList, ISuperNode>('createSuperNode', getState);

export function SuperNodeListGenerator() {
  return class SuperNodeList implements ISuperNodeList {
    constructor() {
      initializeConstantsAndProperties<SuperNodeList>(this, SuperNodeListConstantKeys, SuperNodeListPropertyKeys);
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public item(index: number): Promise<ISuperNode | null> {
      return awaitedHandler.runMethod<ISuperNode | null>(this, 'item', [index]);
    }

    public forEach(callbackfn: (value: ISuperNode, key: number, parent: ISuperNodeList) => void, thisArg?: any): Promise<void> {
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

export interface ISuperNodeListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly length?: Promise<number>;
}

export const SuperNodeListPropertyKeys = ['length'];

export const SuperNodeListConstantKeys = [];
