import Constructable from './Constructable';
import { INodePointer } from '@ulixee/js-path';
export declare class NotImplementedError extends Error {
}
export default class AwaitedHandler<TClass> {
    static delegate: IAwaitedHandlerDelegate;
    readonly getState: any;
    readonly setState: any;
    readonly className: string;
    constructor(className: string, getState: any, setState: any);
    construct(instance: TClass, args: any[]): TClass;
    getProperty<T>(instance: TClass, name: string, hasNullDefault?: boolean): Promise<T>;
    setProperty<T>(instance: TClass, name: string, value: T): void;
    createNodePointer(instance: TClass): Promise<INodePointer>;
    runMethod<T>(instance: TClass, name: string, args: any[]): Promise<T>;
    runStatic<T>(klass: Constructable<TClass>, name: string, args: any[]): Promise<T>;
    static setStorageSymbol(storageSymbol: symbol): void;
}
export interface IAwaitedHandlerDelegate {
    construct<TClass>(self: AwaitedHandler<TClass>, instance: TClass, args: any[]): TClass;
    construct<TClass>(self: AwaitedHandler<TClass>, instance: TClass, args: any[]): void;
    getProperty<T, TClass>(self: AwaitedHandler<TClass>, instance: TClass, name: string, hasNullDefault?: boolean): Promise<T>;
    setProperty<T, TClass>(self: AwaitedHandler<TClass>, instance: TClass, name: string, value: T): void;
    createNodePointer<TClass>(self: AwaitedHandler<TClass>, instance: TClass): Promise<INodePointer>;
    runMethod<T, TClass>(self: AwaitedHandler<TClass>, instance: TClass, name: string, args: any[]): Promise<T>;
    runStatic<T, TClass>(self: AwaitedHandler<TClass>, klass: Constructable<TClass>, name: string, args: any[]): Promise<T>;
}
