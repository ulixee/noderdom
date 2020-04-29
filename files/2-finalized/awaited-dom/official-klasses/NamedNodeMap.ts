import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { INamedNodeMap } from '../../awaited-base/interfaces/official';
import { NamedNodeMapGenerator, initialize, INamedNodeMapProperties } from '../../awaited-base/official-klasses/NamedNodeMap';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INamedNodeMap, INamedNodeMapProperties>();
const NamedNodeMapBase = NamedNodeMapGenerator();

export default class NamedNodeMap extends NamedNodeMapBase implements INamedNodeMap {
  constructor() {
    super();
    initialize(NamedNodeMap, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createNamedNodeMap<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): INamedNodeMap {
  const instance = new NamedNodeMap();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
