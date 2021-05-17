import { IXPathExpression, IXPathResult } from '../../base/interfaces/official';
import { INodeIsolate } from '../../base/interfaces/isolate';
import { IXPathExpressionProperties } from '../../base/official-klasses/XPathExpression';
export declare const getState: (instance: IXPathExpression) => IXPathExpressionProperties, setState: (instance: IXPathExpression, properties: Partial<IXPathExpressionProperties>) => void;
declare const XPathExpressionBaseClass: {
    new (): {
        evaluate(contextNode: INodeIsolate, type?: number | undefined, result?: IXPathResult | null | undefined): IXPathResult;
    };
};
export default class XPathExpression extends XPathExpressionBaseClass implements IXPathExpression {
    evaluate(contextNode: INodeIsolate, type?: number, result?: IXPathResult | null): IXPathResult;
}
export {};
