import StateMachine from '../../base/StateMachine';
import { IDOMStringMap } from '../../base/interfaces/official';
import { DOMStringMapGenerator, IDOMStringMapProperties } from '../../base/official-klasses/DOMStringMap';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDOMStringMap, IDOMStringMapProperties>();
const DOMStringMapBaseClass = DOMStringMapGenerator();

export default class DOMStringMap extends DOMStringMapBaseClass implements IDOMStringMap {}
