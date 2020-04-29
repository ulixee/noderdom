import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IAttr, IElement } from '../../awaited-base/interfaces/official';
import { AttrGenerator, initialize, IAttrProperties } from '../../awaited-base/official-klasses/Attr';
import { createElement } from './Element';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAttr, IAttrProperties>();
const AttrBase = AttrGenerator(Node);

export default class Attr extends AttrBase implements IAttr {
  constructor() {
    super();
    initialize(Attr, this);
  }

  // properties

  public get ownerElement(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('ownerElement'), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createAttr<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IAttr {
  const instance = new Attr();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
