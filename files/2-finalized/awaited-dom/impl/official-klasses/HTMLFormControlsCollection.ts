import StateMachine from '../../base/StateMachine';
import { IHTMLFormControlsCollection, IRadioNodeList } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { HTMLFormControlsCollectionGenerator, IHTMLFormControlsCollectionProperties } from '../../base/official-klasses/HTMLFormControlsCollection';
import HTMLCollectionBase from './HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFormControlsCollection, IHTMLFormControlsCollectionProperties>();
const HTMLFormControlsCollectionBaseClass = HTMLFormControlsCollectionGenerator(HTMLCollectionBase);

export default class HTMLFormControlsCollection extends HTMLFormControlsCollectionBaseClass implements IHTMLFormControlsCollection {
  constructor() {
    super();
  }
}
