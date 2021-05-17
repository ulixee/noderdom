import StateMachine from '../../base/StateMachine';
import { IHTMLOptionElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLOptionElementIsolateBase, { IHTMLOptionElementIsolateProperties } from '../../base/isolate-mixins/HTMLOptionElementIsolate';
import { createHTMLFormElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionElementIsolate, IHTMLOptionElementIsolateProperties>();

export default class HTMLOptionElementIsolate extends HTMLOptionElementIsolateBase implements IHTMLOptionElementIsolate {
  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty(this, 'form'), awaitedOptions);
  }
}
