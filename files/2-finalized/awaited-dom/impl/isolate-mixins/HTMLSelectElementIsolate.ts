import StateMachine from '../../base/StateMachine';
import { IHTMLSelectElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLFormElement, IHTMLOptionsCollection, IHTMLOptionElement } from '../../base/interfaces/official';
import { ISuperNodeList, ISuperHTMLCollection, ISuperElement } from '../../base/interfaces/super';
import HTMLSelectElementIsolateBase, { IHTMLSelectElementIsolateProperties } from '../../base/isolate-mixins/HTMLSelectElementIsolate';
import { createHTMLFormElement, createSuperNodeList, createHTMLOptionsCollection, createSuperHTMLCollection, createSuperElement, createHTMLOptionElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLSelectElementIsolate, IHTMLSelectElementIsolateProperties>();

export default class HTMLSelectElementIsolate extends HTMLSelectElementIsolateBase implements IHTMLSelectElementIsolate {
  public get form(): IHTMLFormElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
  }

  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty('labels'), awaitedOptions);
  }

  public get options(): Promise<ISuperHTMLCollection> | IHTMLOptionsCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLOptionsCollection(awaitedPath.addProperty('options'), awaitedOptions);
  }

  public get selectedOptions(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('selectedOptions'), awaitedOptions);
  }

  // methods

  public item(index: number): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('item', index), awaitedOptions);
  }

  public namedItem(name: string): IHTMLOptionElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLOptionElement(awaitedPath.addMethod('namedItem', name), awaitedOptions);
  }
}
