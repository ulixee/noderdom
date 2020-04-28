import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IHTMLCollection, IElement } from '../../awaited-base/interfaces/official';
import { HTMLCollectionGenerator, initialize, IHTMLCollectionProperties } from '../../awaited-base/official-klasses/HTMLCollection';
import { createElement } from './Element';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
const HTMLCollectionBase = HTMLCollectionGenerator();

export default class HTMLCollection extends HTMLCollectionBase implements IHTMLCollection {
  constructor() {
    super();
    initialize(HTMLCollection, this);
  }

  // methods

  public namedItem(name: string): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addMethod('namedItem', [name]), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createHTMLCollection(awaitedPath: AwaitedPath, awaitedOptions: any): HTMLCollection {
  const instance = new HTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
