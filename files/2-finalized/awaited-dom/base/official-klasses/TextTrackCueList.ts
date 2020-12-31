import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { ITextTrackCueList, ITextTrackCue } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITextTrackCueList, ITextTrackCueListProperties>();
export const awaitedHandler = new AwaitedHandler<ITextTrackCueList>('TextTrackCueList', getState, setState);
export const nodeAttacher = new NodeAttacher<ITextTrackCueList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<ITextTrackCueList, ITextTrackCue>(getState, setState, awaitedHandler);

export function TextTrackCueListGenerator() {
  return class TextTrackCueList implements ITextTrackCueList, PromiseLike<ITextTrackCueList> {
    constructor() {
      initializeConstantsAndProperties<TextTrackCueList>(this, TextTrackCueListConstantKeys, TextTrackCueListPropertyKeys);
      setState(this, {
        createInstanceName: 'createTextTrackCueList',
        createIterableName: 'createTextTrackCue',
      });
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public getCueById(id: string): ITextTrackCue {
      throw new Error('TextTrackCueList.getCueById not implemented');
    }

    public then<TResult1 = ITextTrackCueList, TResult2 = never>(onfulfilled?: ((value: ITextTrackCueList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<ITextTrackCue> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextTrackCueListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const TextTrackCueListPropertyKeys = ['length'];

export const TextTrackCueListConstantKeys = [];
