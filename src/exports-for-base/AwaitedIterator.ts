import AwaitedPath from './AwaitedPath';
import AwaitedHandler from './AwaitedHandler';

export default class AwaitedIterator<TClass, T> {
  public static creators = require('../awaited-dom/create');
  private readonly createItemName: string;
  private readonly getState: (instance: TClass) => IAwaitedIteratorProperties;
  private awaitedHandler: AwaitedHandler<TClass>;

  constructor(
    createItemName: string,
    getState: (instance: TClass) => IAwaitedIteratorProperties,
    awaitedHandler: AwaitedHandler<TClass>,
  ) {
    this.createItemName = createItemName;
    this.getState = getState;
    this.awaitedHandler = awaitedHandler;
  }

  public iterateAttachedNodeIds(instance: TClass): IterableIterator<T> {
    const { awaitedPath } = this.getState(instance);
    return this.getNodeList(instance, awaitedPath.iterableIds ?? [])[Symbol.iterator]();
  }

  public async toArray(instance: TClass): Promise<T[]> {
    const [, iterableIds] = await this.awaitedHandler.getNodeIds(instance);
    return this.getNodeList(instance, iterableIds);
  }

  private getNodeList(instance: TClass, nodeIds: number[]): T[] {
    if (!nodeIds) return [];

    const state = this.getState(instance);
    const awaitedPath = state.awaitedPath as AwaitedPath;
    const awaitedOptions = state.awaitedOptions;
    const createChild = AwaitedIterator.creators[this.createItemName];
    return nodeIds.map(nodeId => {
      const childPath = awaitedPath.withNodeId(nodeId);
      return createChild(childPath, awaitedOptions) as T;
    });
  }
}

export interface IAwaitedIteratorProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
}
