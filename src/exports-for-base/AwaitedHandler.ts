import Constructable from './Constructable';
import IAttachedState from './IAttachedState';

export class NotImplementedError extends Error {}

export default class AwaitedHandler<TClass> {
  public static delegate: IAwaitedHandlerDelegate;
  public readonly getState: any;
  public readonly setState: any;
  public readonly className: string;

  constructor(className: string, getState: any, setState: any) {
    this.className = className;
    this.getState = getState;
    this.setState = setState;
  }

  public construct(instance: TClass, args: any[]): TClass {
    return AwaitedHandler.delegate?.construct(this, instance, args);
  }

  public getProperty<T>(instance: TClass, name: string, hasNullDefault: boolean = false): Promise<T> {
    return AwaitedHandler.delegate?.getProperty(this, instance, name, hasNullDefault);
  }

  public setProperty<T>(instance: TClass, name: string, value: T) {
    return AwaitedHandler.delegate?.setProperty(this, instance, name, value);
  }

  public loadState(instance: TClass, properties?: string[]): Promise<IAttachedState> {
    return AwaitedHandler.delegate?.loadState(this, instance, properties);
  }

  public runMethod<T>(instance: TClass, name: string, args: any[]): Promise<T> {
    return AwaitedHandler.delegate?.runMethod(this, instance, name, args);
  }

  public runStatic<T>(klass: Constructable<TClass>, name: string, args: any[]): Promise<T> {
    return AwaitedHandler.delegate?.runStatic(this, klass, name, args);
  }
}

export interface IAwaitedHandlerDelegate {
  construct<TClass>(self: AwaitedHandler<TClass>, instance: TClass, args: any[]): TClass;
  construct<TClass>(self: AwaitedHandler<TClass>, instance: TClass, args: any[]): void;
  getProperty<T, TClass>(
    self: AwaitedHandler<TClass>,
    instance: TClass,
    name: string,
    hasNullDefault?: boolean,
  ): Promise<T>;
  setProperty<T, TClass>(self: AwaitedHandler<TClass>, instance: TClass, name: string, value: T): void;
  loadState<TClass>(self: AwaitedHandler<TClass>, instance: TClass, properties?: string[]): Promise<IAttachedState>;
  runMethod<T, TClass>(self: AwaitedHandler<TClass>, instance: TClass, name: string, args: any[]): Promise<T>;
  runStatic<T, TClass>(
    self: AwaitedHandler<TClass>,
    klass: Constructable<TClass>,
    name: string,
    args: any[],
  ): Promise<T>;
}
