import StateMachine from '../../awaited-base/StateMachine';
import { IAttrIsolate } from '../../awaited-base/interfaces/isolate';
import { ISuperElement } from '../../awaited-base/interfaces/super';
import AttrIsolateBase, { IAttrIsolateProperties } from '../../awaited-base/isolate-mixins/AttrIsolate';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAttrIsolate, IAttrIsolateProperties>();

export default class AttrIsolate extends AttrIsolateBase implements IAttrIsolate, PromiseLike<IAttrIsolate> {
  public get ownerElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('ownerElement'), awaitedOptions);
  }
}
