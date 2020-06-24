import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLOptionElementIsolate } from '../../awaited-base/interfaces/isolate';
import { IHTMLFormElement } from '../../awaited-base/interfaces/official';
import HTMLOptionElementIsolateBase, { IHTMLOptionElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLOptionElementIsolate';
import { createHTMLFormElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionElementIsolate, IHTMLOptionElementIsolateProperties>();

export default class HTMLOptionElementIsolate extends HTMLOptionElementIsolateBase implements IHTMLOptionElementIsolate {
  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }
}
