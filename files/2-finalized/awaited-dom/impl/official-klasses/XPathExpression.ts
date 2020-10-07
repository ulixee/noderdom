import StateMachine from '../../base/StateMachine';
import { IXPathExpression, IXPathResult } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { XPathExpressionGenerator, IXPathExpressionProperties } from '../../base/official-klasses/XPathExpression';
import { createXPathResult } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IXPathExpression, IXPathExpressionProperties>();
const XPathExpressionBaseClass = XPathExpressionGenerator();

export default class XPathExpression extends XPathExpressionBaseClass implements IXPathExpression {
  public evaluate(contextNode: ISuperNode, type?: number, result?: IXPathResult | null): IXPathResult {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createXPathResult(awaitedPath.addMethod('evaluate', contextNode, type, result), awaitedOptions);
  }
}
