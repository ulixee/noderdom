import NodeFactory, { IRemoteNodeProperties } from './NodeFactory';
import AwaitedHandler from './AwaitedHandler';
import INodePointer from './INodePointer';

export default class AwaitedIterator<TClass, T> {
  public static creators = require('../impl/create');
  private readonly getState: (instance: TClass) => IAwaitedIteratorProperties;
  private readonly setState: (instance: TClass, state: Partial<IAwaitedIteratorProperties>) => void;
  private readonly nodeFactory: NodeFactory<TClass>;
  constructor(
    getState: AwaitedIterator<TClass, T>['getState'],
    setState: AwaitedIterator<TClass, T>['setState'],
    awaitedHandler: AwaitedHandler<TClass>,
  ) {
    this.getState = getState;
    this.setState = setState;
    this.nodeFactory = new NodeFactory<TClass>(getState, setState, awaitedHandler);
  }

  public async load(instance: TClass): Promise<T[]> {
    const nodePointerInstance = await this.nodeFactory.createInstanceWithNodePointer(instance);
    const iterator = this.iterateNodePointers(nodePointerInstance);
    const result = [];
    let next;
    while ((next = iterator.next())) {
      if (next.done) break;
      result.push(next.value);
    }
    return result;
  }

  public iterateNodePointers(instance: TClass): Iterator<T> {
    const state = this.getState(instance);
    const awaitedPath = state.awaitedPath;
    const nodePointer = this.nodeFactory.getNodePointer(instance);

    if (!nodePointer) {
      throw new Error(`Please await this iterator`);
    }

    if (!nodePointer.iterableItems) {
      throw new Error(`Please add an await to ${awaitedPath.hasNodeId ? 're-' : ''}run this iterator`);
    }

    let index = 0;
    const defaultCreateChild = AwaitedIterator.creators[state.createIterableName as string];
    return {
      next: (): IteratorResult<T, T> => {
        if (index < nodePointer.iterableItems!.length) {
          const value = nodePointer.iterableItems![index];
          index += 1;
          if (!nodePointer.iterableIsState) {
            return { value: value as any, done: false };
          } else {
            const { type, id } = value as INodePointer;
            let createChild = defaultCreateChild;
            if (type) {
              const dynamicCreator = AwaitedIterator.creators[`create${type}`];
              if (dynamicCreator) createChild = dynamicCreator;
            }
            const awaitedOptions = state.awaitedOptions;
            const childPath = awaitedPath.withNodeId(instance as any, id);
            const child = createChild(childPath, awaitedOptions);
            this.setState(child, {
              nodePointer: value as INodePointer,
            });
            return { value: child, done: false };
          }
        } else {
          // clear out iterable ids
          nodePointer.iterableItems = undefined;
          return { value: undefined as any, done: true };
        }
      },
    };
  }
}

export interface IAwaitedIteratorProperties extends IRemoteNodeProperties {
  createIterableName?: string;
}
