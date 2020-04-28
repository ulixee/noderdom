import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { ISuperNodeList } from '../interfaces/super';
import { INode } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNodeList, ISuperNodeListProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperNodeList>('SuperNodeList', getState, setState);

export function SuperNodeListGenerator() {
  return class SuperNodeList implements ISuperNodeList {
    constructor() {
      initialize(SuperNodeList, this);
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public item(index: number): INode {
      throw new Error('SuperNodeList.item not implemented');
    }

    public forEach(callbackfn: (value: INode, key: number, parent: ISuperNodeList) => void, thisArg?: any): void {
      throw new Error('SuperNodeList.forEach not implemented');
    }

    public entries(): IterableIterator<[number, INode]> {
      throw new Error('SuperNodeList.entries not implemented');
    }

    public keys(): IterableIterator<number> {
      throw new Error('SuperNodeList.keys not implemented');
    }

    public values(): IterableIterator<INode> {
      throw new Error('SuperNodeList.values not implemented');
    }

    public [Symbol.iterator](): IterableIterator<INode> {
      throw new Error('SuperNodeList[Symbol.iterator] not implemented');
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperNodeListProperties {
  readonly length?: Promise<number>;
}

export const SuperNodeListPropertyKeys = ['length'];

export const SuperNodeListConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperNodeList>, self: ISuperNodeList) {
  initializeConstantsAndProperties<ISuperNodeList>(Klass, self, SuperNodeListConstantKeys, SuperNodeListPropertyKeys);
}
