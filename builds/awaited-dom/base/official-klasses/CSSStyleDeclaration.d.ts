import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { ICSSStyleDeclaration, ICSSRule } from '../interfaces/official';
export declare const getState: (instance: ICSSStyleDeclaration) => ICSSStyleDeclarationProperties, setState: (instance: ICSSStyleDeclaration, properties: Partial<ICSSStyleDeclarationProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ICSSStyleDeclaration>;
export declare const nodeFactory: NodeFactory<ICSSStyleDeclaration>;
export declare const awaitedIterator: AwaitedIterator<ICSSStyleDeclaration, string>;
export declare function CSSStyleDeclarationGenerator(): {
    new (): {
        [index: number]: string;
        readonly cssFloat: Promise<string>;
        readonly cssText: Promise<string>;
        readonly length: Promise<number>;
        readonly parentRule: ICSSRule;
        getPropertyPriority(property: string): Promise<string>;
        getPropertyValue(property: string): Promise<string>;
        item(index: number): Promise<string>;
        removeProperty(property: string): Promise<string>;
        setProperty(property: string, value: string, priority?: string): Promise<void>;
        then<TResult1 = ICSSStyleDeclaration, TResult2 = never>(onfulfilled?: ((value: ICSSStyleDeclaration) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<string>;
    };
};
export interface ICSSStyleDeclarationProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly cssFloat?: Promise<string>;
    readonly cssText?: Promise<string>;
    readonly length?: Promise<number>;
    readonly parentRule?: ICSSRule;
}
export declare const CSSStyleDeclarationPropertyKeys: string[];
export declare const CSSStyleDeclarationConstantKeys: never[];
