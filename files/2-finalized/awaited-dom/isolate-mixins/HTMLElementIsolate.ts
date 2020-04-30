import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLElementIsolate } from '../../awaited-base/interfaces/isolate';
import { ISuperElement } from '../../awaited-base/interfaces/super';
import HTMLElementIsolateBase, { IHTMLElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLElementIsolate';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLElementIsolate, IHTMLElementIsolateProperties>();

export default class HTMLElementIsolate extends HTMLElementIsolateBase implements IHTMLElementIsolate {
  public get offsetParent(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
  }
}
