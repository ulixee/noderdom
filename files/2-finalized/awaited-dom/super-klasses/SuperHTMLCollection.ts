import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperHTMLCollection } from '../../awaited-base/interfaces/super';
import { IElement } from '../../awaited-base/interfaces/official';
import { SuperHTMLCollectionGenerator, initialize, ISuperHTMLCollectionProperties } from '../../awaited-base/super-klasses/SuperHTMLCollection';
import { createElement } from '../official-klasses/Element';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
const SuperHTMLCollectionBase = SuperHTMLCollectionGenerator();

export default class SuperHTMLCollection extends SuperHTMLCollectionBase implements ISuperHTMLCollection {
  constructor() {
    super();
    initialize(SuperHTMLCollection, this);
  }

  // methods

  public namedItem(name: string): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addMethod('namedItem', [name]), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperHTMLCollection(awaitedPath: AwaitedPath, awaitedOptions: any): SuperHTMLCollection {
  const instance = new SuperHTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
