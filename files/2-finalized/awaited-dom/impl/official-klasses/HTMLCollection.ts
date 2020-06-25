import StateMachine from '../../base/StateMachine';
import { IHTMLCollection } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { HTMLCollectionGenerator, IHTMLCollectionProperties } from '../../base/official-klasses/HTMLCollection';
import { createSuperElement } from '../create';
import HTMLCollectionBase from './HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
const HTMLCollectionBaseClass = HTMLCollectionGenerator(HTMLCollectionBase);

export default class HTMLCollection extends HTMLCollectionBaseClass implements IHTMLCollection {
  constructor() {
    super();
  }

  // methods

  public namedItem(name: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('namedItem', name), awaitedOptions);
  }
}
