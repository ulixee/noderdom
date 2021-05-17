import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IElementCSSInlineStyle, ICSSStyleDeclaration } from '../interfaces/official';
export declare const getState: (instance: IElementCSSInlineStyle) => IElementCSSInlineStyleProperties, setState: (instance: IElementCSSInlineStyle, properties: Partial<IElementCSSInlineStyleProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IElementCSSInlineStyle>;
export default class ElementCSSInlineStyle implements IElementCSSInlineStyle {
    get style(): ICSSStyleDeclaration;
}
export interface IElementCSSInlineStyleProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly style?: ICSSStyleDeclaration;
}
export declare const ElementCSSInlineStylePropertyKeys: string[];
export declare const ElementCSSInlineStyleConstantKeys: never[];
