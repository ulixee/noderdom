import StateMachine from '../../base/StateMachine';
import { IShadowRootIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import ShadowRootIsolateBase, { IShadowRootIsolateProperties } from '../../base/isolate-mixins/ShadowRootIsolate';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IShadowRootIsolate, IShadowRootIsolateProperties>();

export default class ShadowRootIsolate extends ShadowRootIsolateBase implements IShadowRootIsolate {
  public get host(): Promise<string> | ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'host'), awaitedOptions);
  }
}
