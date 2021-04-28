import AwaitedPath from './AwaitedPath';
import AwaitedHandler from './AwaitedHandler';
import INodePointer from './INodePointer';

export default class AwaitedNodePointers<TClass> {
  public static creators = require('../impl/create');
  private readonly getState: (instance: TClass) => IRemoteNodeProperties;
  private readonly setState: (instance: TClass, state: Partial<IRemoteNodeProperties>) => void;
  private readonly awaitedHandler: AwaitedHandler<TClass>;

  constructor(
    getState: (instance: TClass) => IRemoteNodeProperties,
    setState: (instance: TClass, state: Partial<IRemoteNodeProperties>) => void,
    awaitedHandler: AwaitedHandler<TClass>,
  ) {
    this.getState = getState;
    this.setState = setState;
    this.awaitedHandler = awaitedHandler;
  }

  public async create(instance: TClass): Promise<TClass> {
    const { awaitedOptions, awaitedPath, createInstanceName } = this.getState(instance);
    const state = await this.awaitedHandler.createNodePointer(instance);
    if (!state?.id) {
      return null as any;
    }
    let createNewInstance = AwaitedNodePointers.creators[createInstanceName];
    if (state.type) {
      const typeCreator = AwaitedNodePointers.creators[`create${state.type}`];
      if (typeCreator) createNewInstance = typeCreator;
    }

    const awaitedNodeIdPath = state?.id ? awaitedPath.withNodeId(awaitedPath.parent as any, state?.id) : awaitedPath;
    const newInstance = createNewInstance(awaitedNodeIdPath, awaitedOptions) as TClass;

    this.setState(newInstance, {
      nodePointer: state,
    });

    const thenable = (newInstance as unknown) as PromiseLike<TClass>;
    // return null first time to escape promise chain
    const originalThen = thenable.then;
    // @ts-ignore
    thenable.then = null;
    // relies on fact a calling promises will share the same microtask stack
    process.nextTick(() => {
      thenable.then = originalThen;
    });
    return newInstance;
  }

  public get(instance: TClass): INodePointer | undefined {
    return this.getState(instance).nodePointer;
  }
}

export interface IRemoteNodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  nodePointer?: INodePointer;
}
