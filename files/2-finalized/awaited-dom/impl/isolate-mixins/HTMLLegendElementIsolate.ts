import StateMachine from '../../base/StateMachine';
import { IHTMLLegendElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLLegendElementIsolateBase, { IHTMLLegendElementIsolateProperties } from '../../base/isolate-mixins/HTMLLegendElementIsolate';
import { createHTMLFormElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLegendElementIsolate, IHTMLLegendElementIsolateProperties>();

export default class HTMLLegendElementIsolate extends HTMLLegendElementIsolateBase implements IHTMLLegendElementIsolate {
  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }
}
