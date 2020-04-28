import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLElementIsolate } from '../../awaited-base/interfaces/isolate';
import { IElement } from '../../awaited-base/interfaces/official';
import HTMLElementIsolateBase, { IHTMLElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLElementIsolate';
import { createElement } from '../official-klasses/Element';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLElementIsolate, IHTMLElementIsolateProperties>();

export default class HTMLElementIsolate extends HTMLElementIsolateBase implements IHTMLElementIsolate {
  public get offsetParent(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
  }
}
