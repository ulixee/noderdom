import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IFileList, IFile } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFileList, IFileListProperties>();
export const awaitedHandler = new AwaitedHandler<IFileList>('FileList', getState, setState);
export const nodeFactory = new NodeFactory<IFileList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IFileList, IFile>(getState, setState, awaitedHandler);

export function FileListGenerator() {
  return class FileList implements IFileList, PromiseLike<IFileList> {
    constructor() {
      setState(this, {
        createInstanceName: 'createFileList',
        createIterableName: 'createFile',
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
          if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop as unknown as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
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

    public item(index: number): IFile {
      throw new Error('FileList.item not implemented');
    }

    public then<TResult1 = IFileList, TResult2 = never>(onfulfilled?: ((value: IFileList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): Iterator<IFile> {
      return awaitedIterator.iterateNodePointers(this);
    }

    [index: number]: IFile;

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, FileListPropertyKeys, FileListConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFileListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const FileListPropertyKeys = ['length'];

export const FileListConstantKeys = [];
