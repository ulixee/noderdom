import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLCollection } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollection>('HTMLCollection', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLCollection>('createHTMLCollection', getState, setState, awaitedHandler);

export function HTMLCollectionGenerator() {
  return class HTMLCollection implements IHTMLCollection, PromiseLike<IHTMLCollection> {
    constructor() {
      initializeConstantsAndProperties<HTMLCollection>(this, HTMLCollectionConstantKeys, HTMLCollectionPropertyKeys);
    }

    // methods

    public namedItem(name: string): Promise<ISuperElement | null> {
      return awaitedHandler.runMethod<ISuperElement | null>(this, 'namedItem', [name]);
    }

    public then<TResult1 = IHTMLCollection, TResult2 = never>(onfulfilled?: ((value: IHTMLCollection) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLCollectionPropertyKeys = [];

export const HTMLCollectionConstantKeys = [];
