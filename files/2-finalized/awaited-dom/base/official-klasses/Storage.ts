import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IStorage } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IStorage, IStorageProperties>();
export const awaitedHandler = new AwaitedHandler<IStorage>('Storage', getState, setState);

export function StorageGenerator() {
  return class Storage implements IStorage {
    constructor() {
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
            return target.getItem(prop as string);
          }
        },
      });

      return proxy;
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public clear(): Promise<undefined> {
      return awaitedHandler.runMethod<undefined>(this, 'clear', []);
    }

    public getItem(key: string): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'getItem', [key]);
    }

    public key(index: number): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'key', [index]);
    }

    public removeItem(key: string): Promise<undefined> {
      return awaitedHandler.runMethod<undefined>(this, 'removeItem', [key]);
    }

    public setItem(key: string, value: string): Promise<undefined> {
      return awaitedHandler.runMethod<undefined>(this, 'setItem', [key, value]);
    }



    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, StoragePropertyKeys, StorageConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStorageProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly length?: Promise<number>;
}

export const StoragePropertyKeys = ['length'];

export const StorageConstantKeys = [];
