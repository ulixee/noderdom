import StateMachine from '../../base/StateMachine';
import { IDOMImplementation } from '../../base/interfaces/official';
import { DOMImplementationGenerator, IDOMImplementationProperties } from '../../base/official-klasses/DOMImplementation';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMImplementation, IDOMImplementationProperties>();
const DOMImplementationBaseClass = DOMImplementationGenerator();

export default class DOMImplementation extends DOMImplementationBaseClass implements IDOMImplementation {}
