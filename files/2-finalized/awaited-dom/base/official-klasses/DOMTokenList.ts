import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDOMTokenList, IDOMTokenListProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMTokenList>('DOMTokenList', getState, setState);
export const nodeFactory = new NodeFactory<IDOMTokenList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IDOMTokenList, string>(getState, setState, awaitedHandler);

export function DOMTokenListGenerator() {
  return class DOMTokenList implements IDOMTokenList, PromiseLike<IDOMTokenList> {
    constructor() {
      initializeConstantsAndProperties<DOMTokenList>(this, DOMTokenListConstantKeys, DOMTokenListPropertyKeys);
      setState(this, {
        createInstanceName: 'createDOMTokenList',
        createIterableName: 'string',
      });
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
          if (!isNaN(prop as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
          }
        },
      });

      recordProxy(proxy, this);
      return proxy;
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    public get value(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'value', false);
    }

    // methods

    public add(...tokens: string[]): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'add', [tokens]);
    }

    public contains(token: string): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'contains', [token]);
    }

    public item(index: number): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'item', [index]);
    }

    public remove(...tokens: string[]): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'remove', [tokens]);
    }

    public replace(token: string, newToken: string): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'replace', [token, newToken]);
    }

    public supports(token: string): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'supports', [token]);
    }

    public toString(): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'toString', []);
    }

    public toggle(token: string, force?: boolean): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'toggle', [token, force]);
    }

    public then<TResult1 = IDOMTokenList, TResult2 = never>(onfulfilled?: ((value: IDOMTokenList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public async forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): Promise<void> {
      for (const [key, value] of await this.entries()) {
        callbackfn.call(thisArg, value, key, this);
      }
    }

    public entries(): Promise<IterableIterator<[number, string]>> {
      return awaitedIterator.load(this).then(x => x.entries());
    }

    public keys(): Promise<IterableIterator<number>> {
      return awaitedIterator.load(this).then(x => x.keys());
    }

    public values(): Promise<IterableIterator<string>> {
      return awaitedIterator.load(this).then(x => x.values());
    }

    public [Symbol.iterator](): IterableIterator<string> {
      return awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
    }

    [index: number]: string;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMTokenListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
  readonly value?: Promise<string>;
}

export const DOMTokenListPropertyKeys = ['length', 'value'];

export const DOMTokenListConstantKeys = [];
