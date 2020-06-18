import StateMachine from '../../awaited-base/StateMachine';
import { IDOMRectList } from '../../awaited-base/interfaces/official';
import { DOMRectListGenerator, IDOMRectListProperties } from '../../awaited-base/official-klasses/DOMRectList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectList, IDOMRectListProperties>();
const DOMRectListBaseClass = DOMRectListGenerator();

export default class DOMRectList extends DOMRectListBaseClass implements IDOMRectList {}
