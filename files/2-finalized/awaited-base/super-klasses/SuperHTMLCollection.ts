import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ISuperHTMLCollection, ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLCollection>('SuperHTMLCollection', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperHTMLCollection>('createSuperHTMLCollection', getState, setState, awaitedHandler);

export function SuperHTMLCollectionGenerator() {
  return class SuperHTMLCollection implements ISuperHTMLCollection, PromiseLike<ISuperHTMLCollection> {
    constructor() {
      initializeConstantsAndProperties<SuperHTMLCollection>(this, SuperHTMLCollectionConstantKeys, SuperHTMLCollectionPropertyKeys);
    }

    // methods

    public namedItem(name: string): Promise<ISuperElement | null> {
      return awaitedHandler.runMethod<ISuperElement | null>(this, 'namedItem', [name]);
    }

    public then<TResult1 = ISuperHTMLCollection, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLCollection) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLCollectionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const SuperHTMLCollectionPropertyKeys = [];

export const SuperHTMLCollectionConstantKeys = [];
