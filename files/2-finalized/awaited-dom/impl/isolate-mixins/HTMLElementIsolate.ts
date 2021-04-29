import StateMachine from '../../base/StateMachine';
import { IHTMLElementIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import HTMLElementIsolateBase, { IHTMLElementIsolateProperties } from '../../base/isolate-mixins/HTMLElementIsolate';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLElementIsolate, IHTMLElementIsolateProperties>();

export default class HTMLElementIsolate extends HTMLElementIsolateBase implements IHTMLElementIsolate {
  public get offsetParent(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'offsetParent'), awaitedOptions);
  }
}
