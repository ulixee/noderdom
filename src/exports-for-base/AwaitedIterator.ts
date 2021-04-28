import AwaitedNodePointers, { IRemoteNodeProperties } from './AwaitedNodePointers';
import AwaitedHandler from './AwaitedHandler';
import INodePointer from './INodePointer';

export default class AwaitedIterator<TClass, T> {
  public static creators = require('../impl/create');
  private readonly getState: (instance: TClass) => IAwaitedIteratorProperties;
  private readonly setState: (instance: TClass, state: Partial<IAwaitedIteratorProperties>) => void;
  private readonly nodeLinker: AwaitedNodePointers<TClass>;
  constructor(
    getState: AwaitedIterator<TClass, T>['getState'],
    setState: AwaitedIterator<TClass, T>['setState'],
    awaitedHandler: AwaitedHandler<TClass>,
  ) {
    this.getState = getState;
    this.setState = setState;
    this.nodeLinker = new AwaitedNodePointers<TClass>(getState, setState, awaitedHandler);
  }

  public async load(instance: TClass): Promise<T[]> {
    const remoteNode = await this.nodeLinker.create(instance);
    return [...this.iterateNodePointers(remoteNode)];
  }

  public *iterateNodePointers(instance: TClass): IterableIterator<T> {
    const state = this.getState(instance);
    const awaitedPath = state.awaitedPath;
    const nodePointer = this.nodeLinker.get(instance);

    if (!nodePointer) {
      throw new Error(`Please await this iterator`);
    }

    if (!nodePointer.iterableItems) {
      throw new Error(`Please add an await to ${awaitedPath.hasNodeId ? 're-' : ''}run this iterator`);
    }

    for (const item of nodePointer.iterableItems) {
      if (!nodePointer.iterableIsState) {
        yield item as any;
        continue;
      }

      const itemState = item as INodePointer;
      const { type, id } = itemState;
      let createChild = AwaitedIterator.creators[state.createIterableName!];
      if (type) {
        const dynamicCreator = AwaitedIterator.creators[`create${type}`];
        if (dynamicCreator) createChild = dynamicCreator;
      }
      const awaitedOptions = state.awaitedOptions;
      const childPath = awaitedPath.withNodeId(instance as any, id);
      const child = createChild(childPath, awaitedOptions) as T;

      this.setState(child as any, {
        nodePointer: itemState,
      });
      yield child;
    }

    // clear out iterable ids
    nodePointer.iterableItems = undefined;
  }
}

export interface IAwaitedIteratorProperties extends IRemoteNodeProperties {
  createIterableName?: string;
}
