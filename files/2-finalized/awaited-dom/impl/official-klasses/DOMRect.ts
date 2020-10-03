import StateMachine from '../../base/StateMachine';
import { IDOMRect } from '../../base/interfaces/official';
import { DOMRectGenerator, IDOMRectProperties } from '../../base/official-klasses/DOMRect';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDOMRect, IDOMRectProperties>();
const DOMRectBaseClass = DOMRectGenerator();

export default class DOMRect extends DOMRectBaseClass implements IDOMRect {}
