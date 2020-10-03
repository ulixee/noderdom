import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLCollection, IHTMLCollectionBase } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseProperties, HTMLCollectionBasePropertyKeys, HTMLCollectionBaseConstantKeys } from './HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollection>('HTMLCollection', getState, setState);

export function HTMLCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>) {
  return class HTMLCollection extends HTMLCollectionBase implements IHTMLCollection {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLCollection>(this, HTMLCollectionConstantKeys, HTMLCollectionPropertyKeys);
      // proxy supports indexed property access
      const proxy = new Proxy(this, {
        get(target, prop) {
          if (prop in target) {
            // @ts-ignore
            const value: any = target[prop];
            if (typeof value === 'function') return value.bind(target);
            return value;
          }

          // delegate to string indexer
          return target.namedItem(prop as string);
        },
      });

      recordProxy(proxy, this);
      return proxy;
    }

    // methods

    public namedItem(name: string): ISuperElement {
      throw new Error('HTMLCollection.namedItem not implemented');
    }


  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionProperties extends IHTMLCollectionBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLCollectionPropertyKeys = [...HTMLCollectionBasePropertyKeys];

export const HTMLCollectionConstantKeys = [...HTMLCollectionBaseConstantKeys];
