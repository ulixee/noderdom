import AwaitedPath from './AwaitedPath';
import AwaitedHandler from './AwaitedHandler';

export default class NodeAttacher<TClass> {
  public static creators = require('../awaited-dom/create');
  private readonly getState: (instance: TClass) => INodeAttacherProperties;
  private readonly awaitedHandler: AwaitedHandler<TClass>;

  private readonly setState: (instance: TClass, state: Partial<INodeAttacherProperties>) => any;
  private readonly createInstanceName: string;

  constructor(
    createInstanceName: string,
    getState: (instance: TClass) => INodeAttacherProperties,
    setState: (instance: TClass, state: Partial<INodeAttacherProperties>) => any,
    awaitedHandler: AwaitedHandler<TClass>,
  ) {
    this.createInstanceName = createInstanceName;
    this.getState = getState;
    this.setState = setState;
    this.awaitedHandler = awaitedHandler;
  }

  public async attach(instance: TClass): Promise<TClass> {
    const { awaitedOptions, awaitedPath, originalAwaitedPath } = this.getState(instance);
    const [id, iterableIds] = await this.awaitedHandler.getNodeIds(instance);
    const createNewInstance = NodeAttacher.creators[this.createInstanceName];
    const attachedAwaitedPath = awaitedPath.withNodeId(id);
    if (iterableIds && iterableIds.length) {
      attachedAwaitedPath.setIterableIds(iterableIds);
    }
    const newInstance = createNewInstance(attachedAwaitedPath, awaitedOptions) as TClass;
    this.setState(newInstance, {
      originalAwaitedPath: originalAwaitedPath ?? awaitedPath,
    });

    const thenable = (newInstance as unknown) as PromiseLike<TClass>;
    // return null first time to escape promise chain
    const originalThen = thenable.then;
    // @ts-ignore
    thenable.then = () => {
      thenable.then = originalThen;
      return undefined;
    };
    return newInstance;
  }
}

export interface INodeAttacherProperties {
  originalAwaitedPath: AwaitedPath;
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
}
