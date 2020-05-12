import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLCollection } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollection>('HTMLCollection', getState, setState);

export function HTMLCollectionGenerator() {
  return class HTMLCollection implements IHTMLCollection {
    constructor() {
      initializeConstantsAndProperties<HTMLCollection>(this, HTMLCollectionConstantKeys, HTMLCollectionPropertyKeys);
    }

    // methods

    public namedItem(name: string): Promise<ISuperElement | null> {
      return awaitedHandler.runMethod<ISuperElement | null>(this, 'namedItem', [name]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLCollectionPropertyKeys = [];

export const HTMLCollectionConstantKeys = [];
