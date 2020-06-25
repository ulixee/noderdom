import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { IHeaders, IHeadersInit } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHeaders, IHeadersProperties>();
export const awaitedHandler = new AwaitedHandler<IHeaders>('Headers', getState, setState);
export const nodeAttacher = new NodeAttacher<IHeaders>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IHeaders, [string, string]>(getState, setState, awaitedHandler);

export function HeadersGenerator() {
  return class Headers implements IHeaders, PromiseLike<IHeaders> {
    constructor(_init?: IHeadersInit) {
      initializeConstantsAndProperties<Headers>(this, HeadersConstantKeys, HeadersPropertyKeys);
      setState(this, {
        createInstanceName: 'createHeaders',
      });
    }

    // methods

    public append(name: string, value: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'append', [name, value]);
    }

    public delete(name: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'delete', [name]);
    }

    public get(name: string): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'get', [name]);
    }

    public has(name: string): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'has', [name]);
    }

    public set(name: string, value: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'set', [name, value]);
    }

    public then<TResult1 = IHeaders, TResult2 = never>(onfulfilled?: ((value: IHeaders) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public async forEach(callbackfn: (value: string, key: string, parent: IHeaders) => void, thisArg?: any): Promise<void> {
      for (const [key, value] of await this.entries()) {
        callbackfn.call(thisArg, value, key, this);
      }
    }

    public entries(): Promise<IterableIterator<[string, string]>> {
      return awaitedIterator.load(this).then(x => new Map(x).entries());
    }

    public keys(): Promise<IterableIterator<string>> {
      return awaitedIterator.load(this).then(x => new Map(x).keys());
    }

    public values(): Promise<IterableIterator<string>> {
      return awaitedIterator.load(this).then(x => new Map(x).values());
    }

    public [Symbol.iterator](): IterableIterator<[string, string]> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHeadersProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HeadersPropertyKeys = [];

export const HeadersConstantKeys = [];
