import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IXPathEvaluatorBase, IXPathNSResolver, IXPathExpression, IXPathResult } from '../interfaces/official';
import { INodeIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IXPathEvaluatorBase) => IXPathEvaluatorBaseProperties, setState: (instance: IXPathEvaluatorBase, properties: Partial<IXPathEvaluatorBaseProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IXPathEvaluatorBase>;
export default class XPathEvaluatorBase implements IXPathEvaluatorBase {
    createExpression(expression: string, resolver?: IXPathNSResolver | null): IXPathExpression;
    evaluate(expression: string, contextNode: INodeIsolate, resolver?: IXPathNSResolver | null, type?: number, result?: IXPathResult | null): IXPathResult;
}
export interface IXPathEvaluatorBaseProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const XPathEvaluatorBasePropertyKeys: never[];
export declare const XPathEvaluatorBaseConstantKeys: never[];
