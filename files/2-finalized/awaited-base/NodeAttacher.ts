import AwaitedPath from './AwaitedPath';
import AwaitedHandler from './AwaitedHandler';

export default class NodeAttacher<TClass> {
  public static creators = require('../awaited-dom/create');
  private readonly getState: (instance: TClass) => INodeAttacherProperties;
  private readonly awaitedHandler: AwaitedHandler<TClass>;

  constructor(getState: (instance: TClass) => INodeAttacherProperties, awaitedHandler: AwaitedHandler<TClass>) {
    this.getState = getState;
    this.awaitedHandler = awaitedHandler;
  }

  public async attach(instance: TClass): Promise<TClass> {
    const { awaitedOptions, awaitedPath, createInstanceName } = this.getState(instance);
    const [id, iterableIds] = await this.awaitedHandler.getNodeIds(instance);
    const createNewInstance = NodeAttacher.creators[createInstanceName];
    const attachedAwaitedPath = awaitedPath.withNodeId(id);
    if (iterableIds && iterableIds.length) {
      attachedAwaitedPath.setIterableIds(iterableIds);
    }
    const newInstance = createNewInstance(attachedAwaitedPath, awaitedOptions) as TClass;

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
}

export interface INodeAttacherProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
}
