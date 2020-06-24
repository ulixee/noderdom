import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLCollectionIsolate } from '../../awaited-base/interfaces/isolate';
import { ISuperElement } from '../../awaited-base/interfaces/super';
import HTMLCollectionIsolateBase, { IHTMLCollectionIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLCollectionIsolate';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollectionIsolate, IHTMLCollectionIsolateProperties>();

export default class HTMLCollectionIsolate extends HTMLCollectionIsolateBase implements IHTMLCollectionIsolate {
  public namedItem(name: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('namedItem', name), awaitedOptions);
  }
}
