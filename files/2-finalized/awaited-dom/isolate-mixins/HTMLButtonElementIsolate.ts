import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLButtonElementIsolate } from '../../awaited-base/interfaces/isolate';
import { IHTMLFormElement } from '../../awaited-base/interfaces/official';
import { ISuperNodeList } from '../../awaited-base/interfaces/super';
import HTMLButtonElementIsolateBase, { IHTMLButtonElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLButtonElementIsolate';
import { createHTMLFormElement, createSuperNodeList } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLButtonElementIsolate, IHTMLButtonElementIsolateProperties>();

export default class HTMLButtonElementIsolate extends HTMLButtonElementIsolateBase implements IHTMLButtonElementIsolate {
  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }

  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty('labels'), awaitedOptions);
  }
}
