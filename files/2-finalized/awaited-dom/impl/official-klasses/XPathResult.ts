import StateMachine from '../../base/StateMachine';
import { IXPathResult } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { XPathResultGenerator, IXPathResultProperties } from '../../base/official-klasses/XPathResult';
import { createSuperNode } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IXPathResult, IXPathResultProperties>();
const XPathResultBaseClass = XPathResultGenerator();

export default class XPathResult extends XPathResultBaseClass implements IXPathResult {
  public get singleNodeValue(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'singleNodeValue'), awaitedOptions);
  }

  // methods

  public iterateNext(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod(this, 'iterateNext', ), awaitedOptions);
  }

  public snapshotItem(index: number): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod(this, 'snapshotItem', index), awaitedOptions);
  }
}
