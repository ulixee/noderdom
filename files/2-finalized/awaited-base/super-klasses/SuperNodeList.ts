import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ISuperNodeList, ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNodeList, ISuperNodeListProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperNodeList>('SuperNodeList', getState, setState);

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

    public forEach(callbackfn: (value: ISuperNode, key: number, parent: ISuperNodeList) => void, thisArg?: any): void {
      throw new Error('SuperNodeList.forEach not implemented');
    }

    public entries(): IterableIterator<[number, ISuperNode]> {
      throw new Error('SuperNodeList.entries not implemented');
    }

    public keys(): IterableIterator<number> {
      throw new Error('SuperNodeList.keys not implemented');
    }

    public values(): IterableIterator<ISuperNode> {
      throw new Error('SuperNodeList.values not implemented');
    }

    public [Symbol.iterator](): IterableIterator<ISuperNode> {
      throw new Error('SuperNodeList[Symbol.iterator] not implemented');
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
