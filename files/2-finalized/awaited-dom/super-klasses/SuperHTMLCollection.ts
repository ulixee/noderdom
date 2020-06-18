import StateMachine from '../../awaited-base/StateMachine';
import { ISuperHTMLCollection } from '../../awaited-base/interfaces/super';
import { SuperHTMLCollectionGenerator, ISuperHTMLCollectionProperties } from '../../awaited-base/super-klasses/SuperHTMLCollection';
import HTMLCollectionBaseIsolate from '../isolate-mixins/HTMLCollectionBaseIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
const SuperHTMLCollectionBaseClass = SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate);

export default class SuperHTMLCollection extends SuperHTMLCollectionBaseClass implements ISuperHTMLCollection {
  constructor() {
    super();
  }
}
