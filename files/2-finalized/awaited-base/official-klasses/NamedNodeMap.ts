import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { INamedNodeMap, IAttr } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INamedNodeMap, INamedNodeMapProperties>();
export const awaitedHandler = new AwaitedHandler<INamedNodeMap>('NamedNodeMap', getState, setState);
export const nodeAttacher = new NodeAttacher<INamedNodeMap>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<INamedNodeMap, IAttr>(getState, setState, awaitedHandler);

export function NamedNodeMapGenerator() {
  return class NamedNodeMap implements INamedNodeMap, PromiseLike<INamedNodeMap> {
    constructor() {
      initializeConstantsAndProperties<NamedNodeMap>(this, NamedNodeMapConstantKeys, NamedNodeMapPropertyKeys);
      setState(this, {
        createInstanceName: 'createNamedNodeMap',
        createIterableName: 'createAttr',
      });
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

    public then<TResult1 = INamedNodeMap, TResult2 = never>(onfulfilled?: ((value: INamedNodeMap) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<IAttr> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
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
