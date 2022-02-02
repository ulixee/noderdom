import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLFormControlsCollection, IHTMLCollectionBase, IRadioNodeList } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseProperties, HTMLCollectionBasePropertyKeys, HTMLCollectionBaseConstantKeys } from './HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFormControlsCollection, IHTMLFormControlsCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFormControlsCollection>('HTMLFormControlsCollection', getState, setState);

export function HTMLFormControlsCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>) {
  return class HTMLFormControlsCollection extends HTMLCollectionBase implements IHTMLFormControlsCollection {
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

          // delegate to indexer property
          if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop as unknown as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
          }

          // delegate to string indexer
          if(typeof prop === 'string') {
            return target.namedItem(prop as string);
          }
        },
      });

      return proxy;
    }

    // methods

    public namedItem(name: string): Promise<IRadioNodeList | ISuperElement | null> {
      return awaitedHandler.runMethod<IRadioNodeList | ISuperElement | null>(this, 'namedItem', [name]);
    }



    [index: number]: ISuperElement;

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLFormControlsCollectionPropertyKeys, HTMLFormControlsCollectionConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFormControlsCollectionProperties extends IHTMLCollectionBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLFormControlsCollectionPropertyKeys = [...HTMLCollectionBasePropertyKeys];

export const HTMLFormControlsCollectionConstantKeys = [...HTMLCollectionBaseConstantKeys];
