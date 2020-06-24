import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLTextAreaElementIsolate } from '../../awaited-base/interfaces/isolate';
import { IHTMLFormElement } from '../../awaited-base/interfaces/official';
import { ISuperNodeList } from '../../awaited-base/interfaces/super';
import HTMLTextAreaElementIsolateBase, { IHTMLTextAreaElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLTextAreaElementIsolate';
import { createHTMLFormElement, createSuperNodeList } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTextAreaElementIsolate, IHTMLTextAreaElementIsolateProperties>();

export default class HTMLTextAreaElementIsolate extends HTMLTextAreaElementIsolateBase implements IHTMLTextAreaElementIsolate {
  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }

  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty('labels'), awaitedOptions);
  }
}
