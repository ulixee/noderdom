import StateMachine from '../../base/StateMachine';
import { INamedNodeMap } from '../../base/interfaces/official';
import { NamedNodeMapGenerator, INamedNodeMapProperties } from '../../base/official-klasses/NamedNodeMap';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INamedNodeMap, INamedNodeMapProperties>();
const NamedNodeMapBaseClass = NamedNodeMapGenerator();

export default class NamedNodeMap extends NamedNodeMapBaseClass implements INamedNodeMap {}
