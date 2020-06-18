import AwaitedPath from './AwaitedPath';
import AwaitedHandler from './AwaitedHandler';

export default class AwaitedIterator<TClass, T> {
  public static creators = require('../awaited-dom/create');
  private readonly getState: (instance: TClass) => IAwaitedIteratorProperties;
  private awaitedHandler: AwaitedHandler<TClass>;

  constructor(getState: (instance: TClass) => IAwaitedIteratorProperties, awaitedHandler: AwaitedHandler<TClass>) {
    this.getState = getState;
    this.awaitedHandler = awaitedHandler;
  }

  public *iterateAttachedNodeIds(instance: TClass): IterableIterator<T> {
    const { awaitedPath } = this.getState(instance);
    const iterable = this.iterator(instance, awaitedPath.iterableIds);
    yield* iterable;
  }

  public async toArray(instance: TClass): Promise<T[]> {
    const [, iterableIds] = await this.awaitedHandler.getNodeIds(instance);
    return [...this.iterator(instance, iterableIds)];
  }

  private *iterator(instance: TClass, nodeIds: number[] | undefined) {
    const state = this.getState(instance);
    const awaitedPath = state.awaitedPath as AwaitedPath;

    if (!nodeIds) throw new Error(`Please add an await to ${awaitedPath.hasNodeId ? 're-' : ''}run this iterator`);

    const awaitedOptions = state.awaitedOptions;
    const createChild = AwaitedIterator.creators[state.createIterableName];
    for (const nodeId of nodeIds) {
      const childPath = awaitedPath.withNodeId(nodeId);
      yield createChild(childPath, awaitedOptions) as T;
    }
    // clear out iterable ids
    awaitedPath.iterableIds = undefined;
  }
}

export interface IAwaitedIteratorProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createIterableName: string;
}
