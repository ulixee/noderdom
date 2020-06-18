import StateMachine from '../../awaited-base/StateMachine';
import { INamedNodeMap } from '../../awaited-base/interfaces/official';
import { NamedNodeMapGenerator, INamedNodeMapProperties } from '../../awaited-base/official-klasses/NamedNodeMap';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INamedNodeMap, INamedNodeMapProperties>();
const NamedNodeMapBaseClass = NamedNodeMapGenerator();

export default class NamedNodeMap extends NamedNodeMapBaseClass implements INamedNodeMap {}
