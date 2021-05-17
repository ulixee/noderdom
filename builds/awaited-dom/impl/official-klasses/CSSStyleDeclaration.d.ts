import { ICSSStyleDeclaration, ICSSRule } from '../../base/interfaces/official';
import { ICSSStyleDeclarationProperties } from '../../base/official-klasses/CSSStyleDeclaration';
export declare const getState: (instance: ICSSStyleDeclaration) => ICSSStyleDeclarationProperties, setState: (instance: ICSSStyleDeclaration, properties: Partial<ICSSStyleDeclarationProperties>) => void;
declare const CSSStyleDeclarationBaseClass: {
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
        setProperty(property: string, value: string, priority?: string | undefined): Promise<void>;
        then<TResult1 = ICSSStyleDeclaration, TResult2 = never>(onfulfilled?: ((value: ICSSStyleDeclaration) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<string, any, undefined>;
    };
};
export default class CSSStyleDeclaration extends CSSStyleDeclarationBaseClass implements ICSSStyleDeclaration {
    get parentRule(): ICSSRule;
}
export {};
