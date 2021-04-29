import StateMachine from '../../base/StateMachine';
import { IAttrIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import AttrIsolateBase, { IAttrIsolateProperties } from '../../base/isolate-mixins/AttrIsolate';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IAttrIsolate, IAttrIsolateProperties>();

export default class AttrIsolate extends AttrIsolateBase implements IAttrIsolate {
  public get ownerElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'ownerElement'), awaitedOptions);
  }
}
