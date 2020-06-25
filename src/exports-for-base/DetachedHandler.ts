import Constructable from './Constructable';

export class NotImplementedError extends Error {}

export default class DetachedHandler<TClass> {
  private readonly className: string;
  private readonly getState: any;
  private readonly setState: any;

  constructor(className: string, getState: any, setState: any) {
    this.className = className;
    this.getState = getState;
    this.setState = setState;
  }

  public construct(_instance: TClass, _args: any[]) {
    throw new NotImplementedError(`${this.className} constructor not implemented`);
  }

  public getProperty<T>(instance: TClass, name: string, hasNullDefault: boolean = false): T {
    const value = this.getState(instance)[name];
    return hasNullDefault && value === undefined ? null : value;
  }

  public setProperty<T>(instance: TClass, name: string, value: T) {
    this.setState(instance, { [name]: value });
  }

  public runMethod<T>(_instance: TClass, name: string, _args: any[]): T {
    throw new NotImplementedError(`${this.className}.${name} method not implemented`);
  }

  public runStatic<T>(_klass: Constructable<TClass>, name: string, _args: any[]): T {
    throw new NotImplementedError(`${this.className}.${name} static method not implemented`);
  }
}
