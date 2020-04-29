import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { INamedNodeMap, IAttr } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INamedNodeMap, INamedNodeMapProperties>();
export const awaitedHandler = new AwaitedHandler<INamedNodeMap>('NamedNodeMap', getState, setState);

export function NamedNodeMapGenerator() {
  return class NamedNodeMap implements INamedNodeMap {
    constructor() {
      initialize(NamedNodeMap, this);
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public getNamedItem(qualifiedName: string): Promise<IAttr | null> {
      return awaitedHandler.runMethod<IAttr | null>(this, 'getNamedItem', [qualifiedName]);
    }

    public getNamedItemNS(namespace: string | null, localName: string): Promise<IAttr | null> {
      return awaitedHandler.runMethod<IAttr | null>(this, 'getNamedItemNS', [namespace, localName]);
    }

    public item(index: number): Promise<IAttr | null> {
      return awaitedHandler.runMethod<IAttr | null>(this, 'item', [index]);
    }

    public [Symbol.iterator](): IterableIterator<IAttr> {
      throw new Error('NamedNodeMap[Symbol.iterator] not implemented');
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INamedNodeMapProperties {
  readonly length?: Promise<number>;
}

export const NamedNodeMapPropertyKeys = ['length'];

export const NamedNodeMapConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<INamedNodeMap>, self: INamedNodeMap) {
  initializeConstantsAndProperties<INamedNodeMap>(Klass, self, NamedNodeMapConstantKeys, NamedNodeMapPropertyKeys);
}
