import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import { IHTMLCollectionBaseIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollectionBaseIsolate, IHTMLCollectionBaseIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollectionBaseIsolate>('HTMLCollectionBaseIsolate', getState, setState);
export const awaitedIterator = new AwaitedIterator<IHTMLCollectionBaseIsolate, ISuperElement>(getState, awaitedHandler);

export default class HTMLCollectionBaseIsolate implements IHTMLCollectionBaseIsolate {
  public get length(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'length', false);
  }

  // methods

  public item(index: number): Promise<ISuperElement | null> {
    return awaitedHandler.runMethod<ISuperElement | null>(this, 'item', [index]);
  }

  public [Symbol.iterator](): IterableIterator<ISuperElement> {
    return awaitedIterator.iterateAttachedNodeIds(this)[Symbol.iterator]();
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionBaseIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly length?: Promise<number>;
}

export const HTMLCollectionBaseIsolatePropertyKeys = ['length'];

export const HTMLCollectionBaseIsolateConstantKeys = [];
