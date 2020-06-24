import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLOptionsCollection } from '../../awaited-base/interfaces/official';
import { HTMLOptionsCollectionGenerator, IHTMLOptionsCollectionProperties } from '../../awaited-base/official-klasses/HTMLOptionsCollection';
import HTMLCollection from './HTMLCollection';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionsCollection, IHTMLOptionsCollectionProperties>();
const HTMLOptionsCollectionBaseClass = HTMLOptionsCollectionGenerator(HTMLCollection);

export default class HTMLOptionsCollection extends HTMLOptionsCollectionBaseClass implements IHTMLOptionsCollection {
  constructor() {
    super();
  }
}
