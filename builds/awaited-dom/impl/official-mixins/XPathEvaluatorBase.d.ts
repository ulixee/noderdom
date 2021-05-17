import { IXPathEvaluatorBase, IXPathNSResolver, IXPathExpression, IXPathResult } from '../../base/interfaces/official';
import { INodeIsolate } from '../../base/interfaces/isolate';
import XPathEvaluatorBaseBase, { IXPathEvaluatorBaseProperties } from '../../base/official-mixins/XPathEvaluatorBase';
export declare const getState: (instance: IXPathEvaluatorBase) => IXPathEvaluatorBaseProperties, setState: (instance: IXPathEvaluatorBase, properties: Partial<IXPathEvaluatorBaseProperties>) => void;
export default class XPathEvaluatorBase extends XPathEvaluatorBaseBase implements IXPathEvaluatorBase {
    createExpression(expression: string, resolver?: IXPathNSResolver | null): IXPathExpression;
    evaluate(expression: string, contextNode: INodeIsolate, resolver?: IXPathNSResolver | null, type?: number, result?: IXPathResult | null): IXPathResult;
}
