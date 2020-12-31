import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { IMediaList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IMediaList, IMediaListProperties>();
export const awaitedHandler = new AwaitedHandler<IMediaList>('MediaList', getState, setState);
export const nodeAttacher = new NodeAttacher<IMediaList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IMediaList, string>(getState, setState, awaitedHandler);

export function MediaListGenerator() {
  return class MediaList implements IMediaList, PromiseLike<IMediaList> {
    constructor() {
      initializeConstantsAndProperties<MediaList>(this, MediaListConstantKeys, MediaListPropertyKeys);
      setState(this, {
        createInstanceName: 'createMediaList',
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

    // methods

    public appendMedium(medium: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'appendMedium', [medium]);
    }

    public deleteMedium(medium: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'deleteMedium', [medium]);
    }

    public item(index: number): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'item', [index]);
    }

    public then<TResult1 = IMediaList, TResult2 = never>(onfulfilled?: ((value: IMediaList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<string> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }

    [index: number]: string;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IMediaListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const MediaListPropertyKeys = ['length'];

export const MediaListConstantKeys = [];
