import StateMachine from '../../awaited-base/StateMachine';
import { ISuperHTMLCollection, ISuperElement } from '../../awaited-base/interfaces/super';
import { SuperHTMLCollectionGenerator, ISuperHTMLCollectionProperties } from '../../awaited-base/super-klasses/SuperHTMLCollection';
import { createSuperElement } from '../create';
import HTMLCollectionBaseIsolate from '../isolate-mixins/HTMLCollectionBaseIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
const SuperHTMLCollectionBaseClass = SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate);

export default class SuperHTMLCollection extends SuperHTMLCollectionBaseClass implements ISuperHTMLCollection {
  constructor() {
    super();
  }

  // methods

  public namedItem(name: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('namedItem', name), awaitedOptions);
  }
}
