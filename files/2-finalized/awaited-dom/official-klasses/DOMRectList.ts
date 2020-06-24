import StateMachine from '../../awaited-base/StateMachine';
import { IDOMRectList, IDOMRect } from '../../awaited-base/interfaces/official';
import { DOMRectListGenerator, IDOMRectListProperties } from '../../awaited-base/official-klasses/DOMRectList';
import { createDOMRect } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectList, IDOMRectListProperties>();
const DOMRectListBaseClass = DOMRectListGenerator();

export default class DOMRectList extends DOMRectListBaseClass implements IDOMRectList {
  public item(index: number): IDOMRect {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMRect(awaitedPath.addMethod('item', index), awaitedOptions);
  }
}
