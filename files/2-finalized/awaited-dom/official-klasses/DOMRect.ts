import StateMachine from '../../awaited-base/StateMachine';
import { IDOMRect } from '../../awaited-base/interfaces/official';
import { DOMRectGenerator, IDOMRectProperties } from '../../awaited-base/official-klasses/DOMRect';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRect, IDOMRectProperties>();
const DOMRectBaseClass = DOMRectGenerator();

export default class DOMRect extends DOMRectBaseClass implements IDOMRect {}
