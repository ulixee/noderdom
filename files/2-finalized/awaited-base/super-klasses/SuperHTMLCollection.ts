import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ISuperHTMLCollection, ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLCollection>('SuperHTMLCollection', getState, setState);

export function SuperHTMLCollectionGenerator() {
  return class SuperHTMLCollection implements ISuperHTMLCollection {
    constructor() {
      initializeConstantsAndProperties<SuperHTMLCollection>(this, SuperHTMLCollectionConstantKeys, SuperHTMLCollectionPropertyKeys);
    }

    // methods

    public namedItem(name: string): Promise<ISuperElement | null> {
      return awaitedHandler.runMethod<ISuperElement | null>(this, 'namedItem', [name]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLCollectionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const SuperHTMLCollectionPropertyKeys = [];

export const SuperHTMLCollectionConstantKeys = [];
