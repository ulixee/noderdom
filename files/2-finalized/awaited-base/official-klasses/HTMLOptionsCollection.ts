import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLOptionsCollection, IHTMLCollection } from '../interfaces/official';
import { IHTMLCollectionProperties, HTMLCollectionPropertyKeys, HTMLCollectionConstantKeys } from './HTMLCollection';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionsCollection, IHTMLOptionsCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOptionsCollection>('HTMLOptionsCollection', getState, setState);

export function HTMLOptionsCollectionGenerator(HTMLCollection: Constructable<IHTMLCollection>) {
  return class HTMLOptionsCollection extends HTMLCollection implements IHTMLOptionsCollection {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLOptionsCollection>(this, HTMLOptionsCollectionConstantKeys, HTMLOptionsCollectionPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOptionsCollectionProperties extends IHTMLCollectionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLOptionsCollectionPropertyKeys = [...HTMLCollectionPropertyKeys];

export const HTMLOptionsCollectionConstantKeys = [...HTMLCollectionConstantKeys];
