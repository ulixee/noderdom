import StateMachine from '../../awaited-base/StateMachine';
import { IAttrIsolate } from '../../awaited-base/interfaces/isolate';
import { IElement } from '../../awaited-base/interfaces/official';
import AttrIsolateBase, { IAttrIsolateProperties } from '../../awaited-base/isolate-mixins/AttrIsolate';
import { createElement } from '../official-klasses/Element';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAttrIsolate, IAttrIsolateProperties>();

export default class AttrIsolate extends AttrIsolateBase implements IAttrIsolate {
  public get ownerElement(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('ownerElement'), awaitedOptions);
  }
}
