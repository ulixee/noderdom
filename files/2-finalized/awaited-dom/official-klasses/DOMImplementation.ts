import StateMachine from '../../awaited-base/StateMachine';
import { IDOMImplementation } from '../../awaited-base/interfaces/official';
import { DOMImplementationGenerator, IDOMImplementationProperties } from '../../awaited-base/official-klasses/DOMImplementation';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMImplementation, IDOMImplementationProperties>();
const DOMImplementationBaseClass = DOMImplementationGenerator();

export default class DOMImplementation extends DOMImplementationBaseClass implements IDOMImplementation {}
