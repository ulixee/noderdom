import StateMachine from '../../base/StateMachine';
import { IHTMLFormControlsCollection } from '../../base/interfaces/official';
import { HTMLFormControlsCollectionGenerator, IHTMLFormControlsCollectionProperties } from '../../base/official-klasses/HTMLFormControlsCollection';
import HTMLCollectionBase from './HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFormControlsCollection, IHTMLFormControlsCollectionProperties>();
const HTMLFormControlsCollectionBaseClass = HTMLFormControlsCollectionGenerator(HTMLCollectionBase);

export default class HTMLFormControlsCollection extends HTMLFormControlsCollectionBaseClass implements IHTMLFormControlsCollection {
  constructor() {
    super();
  }
}
