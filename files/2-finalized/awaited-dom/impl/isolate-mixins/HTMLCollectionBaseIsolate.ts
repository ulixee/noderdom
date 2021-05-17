import StateMachine from '../../base/StateMachine';
import { IHTMLCollectionBaseIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import HTMLCollectionBaseIsolateBase, { IHTMLCollectionBaseIsolateProperties } from '../../base/isolate-mixins/HTMLCollectionBaseIsolate';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollectionBaseIsolate, IHTMLCollectionBaseIsolateProperties>();

export default class HTMLCollectionBaseIsolate extends HTMLCollectionBaseIsolateBase implements IHTMLCollectionBaseIsolate {
  public item(index: number): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod(this, 'item', index), awaitedOptions);
  }
}
