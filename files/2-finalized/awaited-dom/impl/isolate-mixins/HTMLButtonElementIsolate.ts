import StateMachine from '../../base/StateMachine';
import { IHTMLButtonElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement } from '../../base/interfaces/official';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLButtonElementIsolateBase, { IHTMLButtonElementIsolateProperties } from '../../base/isolate-mixins/HTMLButtonElementIsolate';
import { createHTMLFormElement, createSuperNodeList } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLButtonElementIsolate, IHTMLButtonElementIsolateProperties>();

export default class HTMLButtonElementIsolate extends HTMLButtonElementIsolateBase implements IHTMLButtonElementIsolate {
  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty(this, 'form'), awaitedOptions);
  }

  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty(this, 'labels'), awaitedOptions);
  }
}
