import StateMachine from '../../awaited-base/StateMachine';
import { IAttr } from '../../awaited-base/interfaces/official';
import { ISuperElement } from '../../awaited-base/interfaces/super';
import { AttrGenerator, initialize, IAttrProperties } from '../../awaited-base/official-klasses/Attr';
import { createSuperElement } from '../create';
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

  public get ownerElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('ownerElement'), awaitedOptions);
  }
}
