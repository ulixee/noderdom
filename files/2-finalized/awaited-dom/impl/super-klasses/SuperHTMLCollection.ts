import StateMachine from '../../base/StateMachine';
import { ISuperHTMLCollection, ISuperElement } from '../../base/interfaces/super';
import { SuperHTMLCollectionGenerator, ISuperHTMLCollectionProperties } from '../../base/super-klasses/SuperHTMLCollection';
import { createSuperElement } from '../create';
import HTMLCollectionBaseIsolate from '../isolate-mixins/HTMLCollectionBaseIsolate';
import HTMLCollectionIsolate from '../isolate-mixins/HTMLCollectionIsolate';
import HTMLOptionsCollectionIsolate from '../isolate-mixins/HTMLOptionsCollectionIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
const SuperHTMLCollectionBaseClass = SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate, HTMLCollectionIsolate, HTMLOptionsCollectionIsolate);

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
