import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLInputElementIsolate } from '../../awaited-base/interfaces/isolate';
import { IHTMLFormElement } from '../../awaited-base/interfaces/official';
import { ISuperNodeList, ISuperHTMLElement } from '../../awaited-base/interfaces/super';
import HTMLInputElementIsolateBase, { IHTMLInputElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLInputElementIsolate';
import { createHTMLFormElement, createSuperNodeList, createSuperHTMLElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElementIsolate, IHTMLInputElementIsolateProperties>();

export default class HTMLInputElementIsolate extends HTMLInputElementIsolateBase implements IHTMLInputElementIsolate {
  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }

  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty('labels'), awaitedOptions);
  }

  public get list(): ISuperHTMLElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLElement(awaitedPath.addProperty('list'), awaitedOptions);
  }
}
