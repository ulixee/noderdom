import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLCollection, IHTMLCollectionBase } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseProperties, HTMLCollectionBasePropertyKeys, HTMLCollectionBaseConstantKeys } from './HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollection>('HTMLCollection', getState, setState);

export function HTMLCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>) {
  return class HTMLCollection extends HTMLCollectionBase implements IHTMLCollection {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLCollection>(this, HTMLCollectionConstantKeys, HTMLCollectionPropertyKeys);
    }

    // methods

    public namedItem(name: string): Promise<ISuperElement | null> {
      return awaitedHandler.runMethod<ISuperElement | null>(this, 'namedItem', [name]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionProperties extends IHTMLCollectionBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLCollectionPropertyKeys = [...HTMLCollectionBasePropertyKeys];

export const HTMLCollectionConstantKeys = [...HTMLCollectionBaseConstantKeys];
