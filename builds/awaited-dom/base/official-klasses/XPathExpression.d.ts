import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IXPathExpression, IXPathResult } from '../interfaces/official';
import { INodeIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IXPathExpression) => IXPathExpressionProperties, setState: (instance: IXPathExpression, properties: Partial<IXPathExpressionProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IXPathExpression>;
export declare function XPathExpressionGenerator(): {
    new (): {
        evaluate(contextNode: INodeIsolate, type?: number, result?: IXPathResult | null): IXPathResult;
    };
};
export interface IXPathExpressionProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const XPathExpressionPropertyKeys: never[];
export declare const XPathExpressionConstantKeys: never[];
