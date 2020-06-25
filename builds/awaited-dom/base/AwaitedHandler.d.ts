import Constructable from './Constructable';
import IAttachedState from './IAttachedState';
export declare class NotImplementedError extends Error {
}
export default class AwaitedHandler<TClass> {
    static initializer: <TC>(self: AwaitedHandler<TC>) => void;
    readonly getState: any;
    readonly setState: any;
    readonly className: string;
    constructor(className: string, getState: any, setState: any);
    construct(instance: TClass, args: any[]): void;
    getProperty<T>(instance: TClass, name: string, hasNullDefault?: boolean): Promise<T>;
    setProperty<T>(instance: TClass, name: string, value: T): void;
    loadState(instance: TClass, properties?: string[]): Promise<IAttachedState>;
    runMethod<T>(instance: TClass, name: string, args: any[]): Promise<T>;
    runStatic<T>(klass: Constructable<TClass>, name: string, args: any[]): Promise<T>;
}
