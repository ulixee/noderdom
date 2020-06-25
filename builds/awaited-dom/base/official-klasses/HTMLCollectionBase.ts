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
export const { getState, setState } = StateMachine<IHTMLCollectionBase, IHTMLCollectionBaseProperties>();
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
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public item(index: number): Promise<ISuperElement | null> {
      return awaitedHandler.runMethod<ISuperElement | null>(this, 'item', [index]);
    }

    public then<TResult1 = IHTMLCollectionBase, TResult2 = never>(onfulfilled?: ((value: IHTMLCollectionBase) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<ISuperElement> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly length?: Promise<number>;
}

export const HTMLCollectionBasePropertyKeys = ['length'];

export const HTMLCollectionBaseConstantKeys = [];
