import StateMachine from '../../base/StateMachine';
import { IXPathEvaluatorBase, IXPathNSResolver, IXPathExpression, IXPathResult } from '../../base/interfaces/official';
import { INodeIsolate } from '../../base/interfaces/isolate';
import XPathEvaluatorBaseBase, { IXPathEvaluatorBaseProperties } from '../../base/official-mixins/XPathEvaluatorBase';
import { createXPathExpression, createXPathResult } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IXPathEvaluatorBase, IXPathEvaluatorBaseProperties>();

export default class XPathEvaluatorBase extends XPathEvaluatorBaseBase implements IXPathEvaluatorBase {
  public createExpression(expression: string, resolver?: IXPathNSResolver | null): IXPathExpression {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createXPathExpression(awaitedPath.addMethod('createExpression', expression, resolver), awaitedOptions);
  }

  public evaluate(expression: string, contextNode: INodeIsolate, resolver?: IXPathNSResolver | null, type?: number, result?: IXPathResult | null): IXPathResult {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createXPathResult(awaitedPath.addMethod('evaluate', expression, contextNode, resolver, type, result), awaitedOptions);
  }
}
