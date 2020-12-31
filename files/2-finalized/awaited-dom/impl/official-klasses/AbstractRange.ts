import StateMachine from '../../base/StateMachine';
import { IAbstractRange } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { AbstractRangeGenerator, IAbstractRangeProperties } from '../../base/official-klasses/AbstractRange';
import { createSuperNode } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IAbstractRange, IAbstractRangeProperties>();
const AbstractRangeBaseClass = AbstractRangeGenerator();

export default class AbstractRange extends AbstractRangeBaseClass implements IAbstractRange {
  public get endContainer(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('endContainer'), awaitedOptions);
  }

  public get startContainer(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('startContainer'), awaitedOptions);
  }
}
