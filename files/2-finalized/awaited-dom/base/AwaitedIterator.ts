import NodeAttacher, { INodeAttacherProperties } from './NodeAttacher';
import AwaitedHandler from './AwaitedHandler';

export default class AwaitedIterator<TClass, T> {
  public static creators = require('../awaited-dom/create');
  private readonly getState: (instance: TClass) => IAwaitedIteratorProperties;
  private readonly nodeAttacher: NodeAttacher<TClass>;
  constructor(
    getState: (instance: TClass) => IAwaitedIteratorProperties,
    setState: (instance: TClass, state: Partial<IAwaitedIteratorProperties>) => void,
    awaitedHandler: AwaitedHandler<TClass>,
  ) {
    this.getState = getState;
    this.nodeAttacher = new NodeAttacher<TClass>(getState, setState, awaitedHandler);
  }

  public async load(instance: TClass): Promise<T[]> {
    const attachedInstance = await this.nodeAttacher.attach(instance);
    return [...this.iterateAttached(attachedInstance)];
  }

  public *iterateAttached(instance: TClass): IterableIterator<T> {
    const state = this.getState(instance);
    const awaitedPath = state.awaitedPath;
    const attachedState = this.nodeAttacher.getAttachedState(instance);

    if (!attachedState) {
      throw new Error(`Please await this iterator`);
    }

    if (!attachedState.iterableIsCustomType) {
      yield* this.iterateAttachedItems(instance);
      return;
    }

    const ids = attachedState.iterableIds;

    if (!ids) {
      throw new Error(`Please add an await to ${awaitedPath.hasAttachedId ? 're-' : ''}run this iterator`);
    }

    for (const id of ids) {
      const createChild = AwaitedIterator.creators[state.createIterableName];
      const awaitedOptions = state.awaitedOptions;
      const childPath = awaitedPath.withAttachedId(id);
      yield createChild(childPath, awaitedOptions) as T;
    }

    // clear out iterable ids
    attachedState.iterableIds = undefined;
  }

  private *iterateAttachedItems(instance: TClass): IterableIterator<T> {
    const state = this.getState(instance);
    const awaitedPath = state.awaitedPath;
    const attachedState = this.nodeAttacher.getAttachedState(instance);

    const items = attachedState?.iterableItems;

    if (!items) {
      throw new Error(`Please add an await to ${awaitedPath.hasAttachedId ? 're-' : ''}run this iterator`);
    }

    for (const item of items) {
      yield item;
    }
    // clear out iterable ids
    attachedState!.iterableItems = undefined;
  }
}

export interface IAwaitedIteratorProperties extends INodeAttacherProperties {
  createIterableName: string;
}
