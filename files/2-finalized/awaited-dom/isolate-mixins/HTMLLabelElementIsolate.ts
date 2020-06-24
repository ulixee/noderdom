import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLLabelElementIsolate } from '../../awaited-base/interfaces/isolate';
import { ISuperHTMLElement } from '../../awaited-base/interfaces/super';
import { IHTMLFormElement } from '../../awaited-base/interfaces/official';
import HTMLLabelElementIsolateBase, { IHTMLLabelElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLLabelElementIsolate';
import { createSuperHTMLElement, createHTMLFormElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLLabelElementIsolate, IHTMLLabelElementIsolateProperties>();

export default class HTMLLabelElementIsolate extends HTMLLabelElementIsolateBase implements IHTMLLabelElementIsolate {
  public get control(): ISuperHTMLElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLElement(awaitedPath.addProperty('control'), awaitedOptions);
  }

  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }
}
