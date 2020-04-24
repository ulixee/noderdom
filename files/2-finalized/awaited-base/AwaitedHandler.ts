import Constructable from './Constructable';

export class NotImplementedError extends Error {}

export default class AwaitedHandler<TClass> {
  public static initializer: <TC>(self: AwaitedHandler<TC>) => void;
  private readonly className: string;
  // @ts-ignore
  private readonly getState: any;
  // @ts-ignore
  private readonly setState: any;

  constructor(className: string, getState: any, setState: any) {
    this.className = className;
    this.getState = getState;
    this.setState = setState;
    AwaitedHandler.initializer<TClass>(this);
  }

  // @ts-ignore
  public construct(instance: TClass, args: any[]) {
    throw new NotImplementedError(`${this.className} constructor not implemented`);
  }

  // @ts-ignore
  public getProperty<T>(instance: TClass, name: string, hasNullDefault: boolean = false): Promise<T> {
    throw new NotImplementedError(`AwaitedHandler.getProperty not implemented`);
  }

  // @ts-ignore
  public setProperty<T>(instance: TClass, name: string, value: T) {
    throw new NotImplementedError(`AwaitedHandler.setProperty not implemented`);
  }

  // @ts-ignore
  public runMethod<T>(instance: TClass, name: string, args: any[]): Promise<T> {
    throw new NotImplementedError(`AwaitedHandler.runMethod not implemented`);
  }

  // @ts-ignore
  public runStatic<T>(klass: Constructable<TClass>, name: string, args: any[]): Promise<T> {
    throw new NotImplementedError(`AwaitedHandler.runStatic not implemented`);
  }
}
