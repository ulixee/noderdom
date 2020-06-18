import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLCollection } from '../../awaited-base/interfaces/official';
import { HTMLCollectionGenerator, IHTMLCollectionProperties } from '../../awaited-base/official-klasses/HTMLCollection';
import HTMLCollectionBase from './HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
const HTMLCollectionBaseClass = HTMLCollectionGenerator(HTMLCollectionBase);

export default class HTMLCollection extends HTMLCollectionBaseClass implements IHTMLCollection {
  constructor() {
    super();
  }
}
