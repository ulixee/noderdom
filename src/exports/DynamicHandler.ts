import Constructable from './Constructable';

export class NotImplementedError extends Error {}

export default class DynamicHandler<TClass> {
  private readonly className: string;
  private readonly getState: any;
  private readonly setState: any;
  private readonly propertiesToHandle: Set<string> = new Set();
  private readonly propertiesToRemove: Set<string> = new Set();

  constructor(className: string, getState: any, setState: any) {
    this.className = className;
    this.getState = getState;
    this.setState = setState;
  }

  public construct(_instance: TClass, _args: any[]) {
    throw new NotImplementedError(`${this.className} constructor not implemented`);
  }

  public get<T>(instance: TClass, name: string, hasNullDefault: boolean = false): T {
    if (this.propertiesToHandle.has(name) && !this.propertiesToRemove.has(name)) {
      const value = this.getState(instance)[name];
      return hasNullDefault && value === undefined ? null : value;
    }
    throw new NotImplementedError(`${this.className}.${name} getter not implemented`);
  }

  public set<T>(instance: TClass, name: string, value: T) {
    if (this.propertiesToHandle.has(name) && !this.propertiesToRemove.has(name)) {
      this.setState(instance, { [name]: value });
      return;
    }
    throw new NotImplementedError(`${this.className}.${name} setter not implemented`);
  }

  public run<T>(_instance: TClass, name: string, _args: any[]): T {
    throw new NotImplementedError(`${this.className}.${name} method not implemented`);
  }

  public runStatic<T>(_klass: Constructable<TClass>, name: string, _args: any[]): T {
    throw new NotImplementedError(`${this.className}.${name} static method not implemented`);
  }

  public handle(...properties: string[]) {
    properties.forEach(property => this.propertiesToHandle.add(property));
  }

  public remove(...properties: string[]) {
    properties.forEach(property => this.propertiesToRemove.add(property));
  }

  public isHandled(key: string) {
    return this.propertiesToHandle.has(key);
  }
}

export function initializeConstantsAndPrototypes<K>(
  Klass: Constructable, // tslint:disable-line:variable-name
  instance: K,
  dynamicHandler: DynamicHandler<K>,
  constantKeys: string[],
  propertyKeys: string[],
) {
  const prototype = Object.getPrototypeOf(instance);
  constantKeys.forEach(key => {
    Object.defineProperty(instance, key, { enumerable: false });
  });
  propertyKeys.forEach(key => {
    const originalPropertyDescriptor = Object.getOwnPropertyDescriptor(Klass.prototype, key);
    const redefinedPropertyDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const isHandled = dynamicHandler.isHandled(key) || !!redefinedPropertyDescriptor;
    if (!isHandled) return;

    const propertyDescriptor = redefinedPropertyDescriptor || originalPropertyDescriptor || {};
    propertyDescriptor.enumerable = true;
    Object.defineProperty(instance, key, propertyDescriptor);
  });
}
