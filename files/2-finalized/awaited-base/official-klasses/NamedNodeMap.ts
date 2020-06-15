import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import { INamedNodeMap, IAttr } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INamedNodeMap, INamedNodeMapProperties>();
export const awaitedHandler = new AwaitedHandler<INamedNodeMap>('NamedNodeMap', getState, setState);
const awaitedIterator = new AwaitedIterator<INamedNodeMap, IAttr>('createAttr', getState);

export function NamedNodeMapGenerator() {
  return class NamedNodeMap implements INamedNodeMap {
    constructor() {
      initializeConstantsAndProperties<NamedNodeMap>(this, NamedNodeMapConstantKeys, NamedNodeMapPropertyKeys);
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

    public *[Symbol.iterator](): IterableIterator<IAttr> {
      return awaitedIterator.createInstance(this, this.length).then(x => yield x[Symbol.iterator]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INamedNodeMapProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly length?: Promise<number>;
}

export const NamedNodeMapPropertyKeys = ['length'];

export const NamedNodeMapConstantKeys = [];
