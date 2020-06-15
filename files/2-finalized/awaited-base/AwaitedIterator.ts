import AwaitedPath from './AwaitedPath';

export default class AwaitedIterator<TClass, T> {
  public static creators = require('../awaited-dom/create');
  private readonly createItemName: string;
  private readonly getState: any;

  constructor(createItemName: string, getState: any) {
    this.createItemName = createItemName;
    this.getState = getState;
  }

  public async createInstance(instance: TClass, lengthPromise: Promise<number>): Promise<T[]> {
    const state = this.getState(instance);
    const awaitedPath = state.awaitedPath as AwaitedPath;
    const awaitedOptions = state.awaitedOptions;
    const length = await lengthPromise;
    const createChild = AwaitedIterator.creators[this.createItemName];
    return Array(length)
      .fill(0)
      .map((_, i) => {
        const childPath = awaitedPath.addProperty(String(i));
        return createChild(childPath, awaitedOptions);
      });
  }
}
