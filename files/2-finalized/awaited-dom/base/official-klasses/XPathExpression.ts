import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IXPathExpression, IXPathResult } from '../interfaces/official';
import { INodeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IXPathExpression, IXPathExpressionProperties>();
export const awaitedHandler = new AwaitedHandler<IXPathExpression>('XPathExpression', getState, setState);

export function XPathExpressionGenerator() {
  return class XPathExpression implements IXPathExpression {
    constructor() {
    }

    // methods

    public evaluate(contextNode: INodeIsolate, type?: number, result?: IXPathResult | null): IXPathResult {
      throw new Error('XPathExpression.evaluate not implemented');
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, XPathExpressionPropertyKeys, XPathExpressionConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IXPathExpressionProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const XPathExpressionPropertyKeys = [];

export const XPathExpressionConstantKeys = [];
