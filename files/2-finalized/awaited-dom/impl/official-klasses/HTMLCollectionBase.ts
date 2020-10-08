import StateMachine from '../../base/StateMachine';
import { IHTMLCollectionBase } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { HTMLCollectionBaseGenerator, IHTMLCollectionBaseProperties } from '../../base/official-klasses/HTMLCollectionBase';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLCollectionBase, IHTMLCollectionBaseProperties>();
const HTMLCollectionBaseBaseClass = HTMLCollectionBaseGenerator();

export default class HTMLCollectionBase extends HTMLCollectionBaseBaseClass implements IHTMLCollectionBase {
  public item(index: number): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('item', index), awaitedOptions);
  }
}
