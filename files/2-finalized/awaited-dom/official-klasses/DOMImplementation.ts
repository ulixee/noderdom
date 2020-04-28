import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IDOMImplementation } from '../../awaited-base/interfaces/official';
import { DOMImplementationGenerator, initialize, IDOMImplementationProperties } from '../../awaited-base/official-klasses/DOMImplementation';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMImplementation, IDOMImplementationProperties>();
const DOMImplementationBase = DOMImplementationGenerator();

export default class DOMImplementation extends DOMImplementationBase implements IDOMImplementation {
  constructor() {
    super();
    initialize(DOMImplementation, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createDOMImplementation(awaitedPath: AwaitedPath, awaitedOptions: any): DOMImplementation {
  const instance = new DOMImplementation();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
