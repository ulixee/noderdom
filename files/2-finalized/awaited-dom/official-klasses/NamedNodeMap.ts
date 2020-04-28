import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { INamedNodeMap, IAttr } from '../../awaited-base/interfaces/official';
import { NamedNodeMapGenerator, initialize, INamedNodeMapProperties } from '../../awaited-base/official-klasses/NamedNodeMap';
import { createAttr } from './Attr';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INamedNodeMap, INamedNodeMapProperties>();
const NamedNodeMapBase = NamedNodeMapGenerator();

export default class NamedNodeMap extends NamedNodeMapBase implements INamedNodeMap {
  constructor() {
    super();
    initialize(NamedNodeMap, this);
  }

  // methods

  public getNamedItem(qualifiedName: string): IAttr {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createAttr(awaitedPath.addMethod('getNamedItem', [qualifiedName]), awaitedOptions);
  }

  public getNamedItemNS(namespace: string | null, localName: string): IAttr {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createAttr(awaitedPath.addMethod('getNamedItemNS', [namespace, localName]), awaitedOptions);
  }

  public item(index: number): IAttr {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createAttr(awaitedPath.addMethod('item', [index]), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createNamedNodeMap(awaitedPath: AwaitedPath, awaitedOptions: any): NamedNodeMap {
  const instance = new NamedNodeMap();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
