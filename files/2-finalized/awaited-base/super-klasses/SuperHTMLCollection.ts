import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLCollection>('SuperHTMLCollection', getState, setState);

export function SuperHTMLCollectionGenerator() {
  return class SuperHTMLCollection implements ISuperHTMLCollection {
    constructor() {
      initialize(SuperHTMLCollection, this);
    }

    // methods

    public namedItem(name: string): Promise<IElement | null> {
      return awaitedHandler.runMethod<IElement | null>(this, 'namedItem', [name]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLCollectionProperties {}

export const SuperHTMLCollectionPropertyKeys = [];

export const SuperHTMLCollectionConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperHTMLCollection>, self: ISuperHTMLCollection) {
  initializeConstantsAndProperties<ISuperHTMLCollection>(Klass, self, SuperHTMLCollectionConstantKeys, SuperHTMLCollectionPropertyKeys);
}
