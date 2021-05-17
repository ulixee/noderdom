import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IXPathEvaluatorBase, IXPathNSResolver, IXPathExpression, IXPathResult } from '../interfaces/official';
import { INodeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IXPathEvaluatorBase, IXPathEvaluatorBaseProperties>();
export const awaitedHandler = new AwaitedHandler<IXPathEvaluatorBase>('XPathEvaluatorBase', getState, setState);

export default class XPathEvaluatorBase implements IXPathEvaluatorBase {
  public createExpression(expression: string, resolver?: IXPathNSResolver | null): IXPathExpression {
    throw new Error('XPathEvaluatorBase.createExpression not implemented');
  }

  public evaluate(expression: string, contextNode: INodeIsolate, resolver?: IXPathNSResolver | null, type?: number, result?: IXPathResult | null): IXPathResult {
    throw new Error('XPathEvaluatorBase.evaluate not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IXPathEvaluatorBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const XPathEvaluatorBasePropertyKeys = [];

export const XPathEvaluatorBaseConstantKeys = [];
