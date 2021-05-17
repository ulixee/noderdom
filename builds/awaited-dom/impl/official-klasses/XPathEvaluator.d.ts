import { IXPathEvaluator } from '../../base/interfaces/official';
import { IXPathEvaluatorProperties } from '../../base/official-klasses/XPathEvaluator';
export declare const getState: (instance: IXPathEvaluator) => IXPathEvaluatorProperties, setState: (instance: IXPathEvaluator, properties: Partial<IXPathEvaluatorProperties>) => void;
declare const XPathEvaluatorBaseClass: {
    new (): {
        createExpression(expression: string, resolver?: ((prefix: string | null) => string | null) | {
            lookupNamespaceURI(prefix: string | null): string | null;
        } | null | undefined): import("../../base/interfaces/official").IXPathExpression;
        evaluate(expression: string, contextNode: import("../../base/interfaces/isolate").INodeIsolate, resolver?: ((prefix: string | null) => string | null) | {
            lookupNamespaceURI(prefix: string | null): string | null;
        } | null | undefined, type?: number | undefined, result?: import("../../base/interfaces/official").IXPathResult | null | undefined): import("../../base/interfaces/official").IXPathResult;
    };
};
export default class XPathEvaluator extends XPathEvaluatorBaseClass implements IXPathEvaluator {
    constructor();
}
export {};
