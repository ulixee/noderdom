import AwaitedPath from './AwaitedPath';
import AwaitedHandler from './AwaitedHandler';
import IAttachedState from './IAttachedState';

export default class NodeAttacher<TClass> {
  public static creators = require('../impl/create');
  private readonly getState: (instance: TClass) => INodeAttacherProperties;
  private readonly setState: (instance: TClass, state: Partial<INodeAttacherProperties>) => void;
  private readonly awaitedHandler: AwaitedHandler<TClass>;

  constructor(
    getState: (instance: TClass) => INodeAttacherProperties,
    setState: (instance: TClass, state: Partial<INodeAttacherProperties>) => void,
    awaitedHandler: AwaitedHandler<TClass>,
  ) {
    this.getState = getState;
    this.setState = setState;
    this.awaitedHandler = awaitedHandler;
  }

  public async attach<K extends keyof TClass & string>(instance: TClass, properties?: K[]): Promise<TClass> {
    const { awaitedOptions, awaitedPath, createInstanceName } = this.getState(instance);
    const state = await this.awaitedHandler.loadState(instance, properties);
    const createNewInstance = NodeAttacher.creators[createInstanceName];
    const attachedAwaitedPath = state?.id ? awaitedPath.withAttachedId(state?.id) : awaitedPath;
    const newInstance = createNewInstance(attachedAwaitedPath, awaitedOptions) as TClass;

    this.setState(newInstance, {
      attachedState: state,
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

  public getAttachedState(instance: TClass) {
    return this.getState(instance).attachedState;
  }
}

export interface INodeAttacherProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  attachedState?: IAttachedState;
}
