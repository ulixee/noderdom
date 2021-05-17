import StateMachine from '../../base/StateMachine';
import { IXPathEvaluator } from '../../base/interfaces/official';
import { XPathEvaluatorGenerator, IXPathEvaluatorProperties } from '../../base/official-klasses/XPathEvaluator';
import XPathEvaluatorBase from '../official-mixins/XPathEvaluatorBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IXPathEvaluator, IXPathEvaluatorProperties>();
const XPathEvaluatorBaseClass = XPathEvaluatorGenerator(XPathEvaluatorBase);

export default class XPathEvaluator extends XPathEvaluatorBaseClass implements IXPathEvaluator {
  constructor() {
    super();
  }
}
