import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLOptionsCollection, IHTMLCollection } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IHTMLCollectionProperties, HTMLCollectionPropertyKeys, HTMLCollectionConstantKeys } from './HTMLCollection';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionsCollection, IHTMLOptionsCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOptionsCollection>('HTMLOptionsCollection', getState, setState);

export function HTMLOptionsCollectionGenerator(HTMLCollection: Constructable<IHTMLCollection>) {
  return class HTMLOptionsCollection extends HTMLCollection implements IHTMLOptionsCollection {
    constructor() {
      super();
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
          if(typeof prop === 'string') {
            return target.namedItem(prop as string);
          }
        },
      });

      return proxy;
    }


    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLOptionsCollectionPropertyKeys, HTMLOptionsCollectionConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOptionsCollectionProperties extends IHTMLCollectionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLOptionsCollectionPropertyKeys = [...HTMLCollectionPropertyKeys];

export const HTMLOptionsCollectionConstantKeys = [...HTMLCollectionConstantKeys];
