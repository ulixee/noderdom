import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IXPathEvaluator, IXPathEvaluatorBase } from '../interfaces/official';
import { IXPathEvaluatorBaseProperties, XPathEvaluatorBasePropertyKeys, XPathEvaluatorBaseConstantKeys } from '../official-mixins/XPathEvaluatorBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IXPathEvaluator, IXPathEvaluatorProperties>();
export const awaitedHandler = new AwaitedHandler<IXPathEvaluator>('XPathEvaluator', getState, setState);

export function XPathEvaluatorGenerator(XPathEvaluatorBase: Constructable<IXPathEvaluatorBase>) {
  return class XPathEvaluator extends XPathEvaluatorBase implements IXPathEvaluator {
    constructor() {
      super();
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, XPathEvaluatorPropertyKeys, XPathEvaluatorConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IXPathEvaluatorProperties extends IXPathEvaluatorBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const XPathEvaluatorPropertyKeys = [...XPathEvaluatorBasePropertyKeys];

export const XPathEvaluatorConstantKeys = [...XPathEvaluatorBaseConstantKeys];
