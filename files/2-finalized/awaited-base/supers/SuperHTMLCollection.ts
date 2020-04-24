// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IElement } from '../interfaces/dom';
import { ISuperHTMLCollection } from '../interfaces/supers';

export const { getState, setState, setHiddenState, setReadonlyOfSuperHTMLCollection } = StateMachine<
  ISuperHTMLCollection,
  ISuperHTMLCollectionProperties,
  ISuperHTMLCollectionReadonlyProperties
>('SuperHTMLCollection');

export const awaitedHandler = new AwaitedHandler<ISuperHTMLCollection>('SuperHTMLCollection', getState, setState);

export default class SuperHTMLCollection implements ISuperHTMLCollection {
  constructor() {
    initializeConstantsAndProperties<SuperHTMLCollection>(SuperHTMLCollection, this, SuperHTMLCollectionConstantKeys, SuperHTMLCollectionPropertyKeys);
  }

  // methods

  public namedItem(name: string): IElement {
    throw new Error('SuperHTMLCollection.namedItem not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLCollectionReadonlyProperties {}

export interface ISuperHTMLCollectionProperties extends ISuperHTMLCollectionReadonlyProperties {}

export const SuperHTMLCollectionPropertyKeys = [];

export const SuperHTMLCollectionConstantKeys = [];
