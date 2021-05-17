import StateMachine from '../../base/StateMachine';
import { IHTMLObjectElementIsolate } from '../../base/interfaces/isolate';
import { ISuperDocument } from '../../base/interfaces/super';
import { IHTMLFormElement } from '../../base/interfaces/official';
import HTMLObjectElementIsolateBase, { IHTMLObjectElementIsolateProperties } from '../../base/isolate-mixins/HTMLObjectElementIsolate';
import { createSuperDocument, createHTMLFormElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLObjectElementIsolate, IHTMLObjectElementIsolateProperties>();

export default class HTMLObjectElementIsolate extends HTMLObjectElementIsolateBase implements IHTMLObjectElementIsolate {
  public get contentDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty(this, 'contentDocument'), awaitedOptions);
  }

  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty(this, 'form'), awaitedOptions);
  }
}
