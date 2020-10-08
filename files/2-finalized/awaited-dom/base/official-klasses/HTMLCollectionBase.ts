import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { IHTMLCollectionBase } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLCollectionBase, IHTMLCollectionBaseProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollectionBase>('HTMLCollectionBase', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLCollectionBase>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IHTMLCollectionBase, ISuperElement>(getState, setState, awaitedHandler);

export function HTMLCollectionBaseGenerator() {
  return class HTMLCollectionBase implements IHTMLCollectionBase, PromiseLike<IHTMLCollectionBase> {
    constructor() {
      initializeConstantsAndProperties<HTMLCollectionBase>(this, HTMLCollectionBaseConstantKeys, HTMLCollectionBasePropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLCollectionBase',
        createIterableName: 'createSuperElement',
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

    // methods

    public item(index: number): ISuperElement {
      throw new Error('HTMLCollectionBase.item not implemented');
    }

    public then<TResult1 = IHTMLCollectionBase, TResult2 = never>(onfulfilled?: ((value: IHTMLCollectionBase) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<ISuperElement> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }

    [index: number]: ISuperElement;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const HTMLCollectionBasePropertyKeys = ['length'];

export const HTMLCollectionBaseConstantKeys = [];
