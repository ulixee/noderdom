import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { ISuperHTMLCollection, ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseIsolate } from '../interfaces/isolate';
import { IHTMLCollectionBaseIsolateProperties, HTMLCollectionBaseIsolatePropertyKeys, HTMLCollectionBaseIsolateConstantKeys } from '../isolate-mixins/HTMLCollectionBaseIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLCollection>('SuperHTMLCollection', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperHTMLCollection>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<ISuperHTMLCollection, ISuperElement>(getState, setState, awaitedHandler);

export function SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate: Constructable<IHTMLCollectionBaseIsolate>) {
  return class SuperHTMLCollection extends HTMLCollectionBaseIsolate implements ISuperHTMLCollection, PromiseLike<ISuperHTMLCollection> {
    constructor() {
      super();
      initializeConstantsAndProperties<SuperHTMLCollection>(this, SuperHTMLCollectionConstantKeys, SuperHTMLCollectionPropertyKeys);
      setState(this, {
        createInstanceName: 'createSuperHTMLCollection',
        createIterableName: 'createSuperElement',
      });
    }

    // methods

    public namedItem(name: string): ISuperElement {
      throw new Error('SuperHTMLCollection.namedItem not implemented');
    }

    public then<TResult1 = ISuperHTMLCollection, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLCollection) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<ISuperElement> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLCollectionProperties extends IHTMLCollectionBaseIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const SuperHTMLCollectionPropertyKeys = [...HTMLCollectionBaseIsolatePropertyKeys];

export const SuperHTMLCollectionConstantKeys = [...HTMLCollectionBaseIsolateConstantKeys];
