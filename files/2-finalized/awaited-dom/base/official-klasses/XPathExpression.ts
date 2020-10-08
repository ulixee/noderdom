import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IXPathExpression, IXPathResult } from '../interfaces/official';
import { INodeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IXPathExpression, IXPathExpressionProperties>();
export const awaitedHandler = new AwaitedHandler<IXPathExpression>('XPathExpression', getState, setState);

export function XPathExpressionGenerator() {
  return class XPathExpression implements IXPathExpression {
    constructor() {
      initializeConstantsAndProperties<XPathExpression>(this, XPathExpressionConstantKeys, XPathExpressionPropertyKeys);
    }

    // methods

    public evaluate(contextNode: INodeIsolate, type?: number, result?: IXPathResult | null): IXPathResult {
      throw new Error('XPathExpression.evaluate not implemented');
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IXPathExpressionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const XPathExpressionPropertyKeys = [];

export const XPathExpressionConstantKeys = [];
