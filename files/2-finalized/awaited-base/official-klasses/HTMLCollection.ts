import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IHTMLCollection, IElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollection>('HTMLCollection', getState, setState);

export function HTMLCollectionGenerator() {
  return class HTMLCollection implements IHTMLCollection {
    constructor() {
      initialize(HTMLCollection, this);
    }

    // methods

    public namedItem(name: string): Promise<IElement | null> {
      return awaitedHandler.runMethod<IElement | null>(this, 'namedItem', [name]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionProperties {}

export const HTMLCollectionPropertyKeys = [];

export const HTMLCollectionConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IHTMLCollection>, self: IHTMLCollection) {
  initializeConstantsAndProperties<IHTMLCollection>(Klass, self, HTMLCollectionConstantKeys, HTMLCollectionPropertyKeys);
}
