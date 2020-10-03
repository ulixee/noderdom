import StateMachine from '../../base/StateMachine';
import { IHTMLCollectionIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import HTMLCollectionIsolateBase, { IHTMLCollectionIsolateProperties } from '../../base/isolate-mixins/HTMLCollectionIsolate';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLCollectionIsolate, IHTMLCollectionIsolateProperties>();

export default class HTMLCollectionIsolate extends HTMLCollectionIsolateBase implements IHTMLCollectionIsolate {
  public namedItem(name: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('namedItem', name), awaitedOptions);
  }
}
