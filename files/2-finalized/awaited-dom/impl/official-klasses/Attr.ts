import StateMachine from '../../base/StateMachine';
import { IAttr } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { AttrGenerator, IAttrProperties } from '../../base/official-klasses/Attr';
import { createSuperElement } from '../create';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAttr, IAttrProperties>();
const AttrBaseClass = AttrGenerator(Node);

export default class Attr extends AttrBaseClass implements IAttr {
  constructor() {
    super();
  }

  // properties

  public get ownerElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('ownerElement'), awaitedOptions);
  }
}
