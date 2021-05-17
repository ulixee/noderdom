import StateMachine from '../../base/StateMachine';
import { IDOMRectReadOnly } from '../../base/interfaces/official';
import { DOMRectReadOnlyGenerator, IDOMRectReadOnlyProperties } from '../../base/official-klasses/DOMRectReadOnly';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectReadOnly, IDOMRectReadOnlyProperties>();
const DOMRectReadOnlyBaseClass = DOMRectReadOnlyGenerator();

export default class DOMRectReadOnly extends DOMRectReadOnlyBaseClass implements IDOMRectReadOnly {}
