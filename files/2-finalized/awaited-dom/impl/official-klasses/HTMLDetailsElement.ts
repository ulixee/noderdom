import StateMachine from '../../base/StateMachine';
import { IHTMLDetailsElement } from '../../base/interfaces/official';
import { HTMLDetailsElementGenerator, IHTMLDetailsElementProperties } from '../../base/official-klasses/HTMLDetailsElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDetailsElement, IHTMLDetailsElementProperties>();
const HTMLDetailsElementBaseClass = HTMLDetailsElementGenerator(HTMLElement);

export default class HTMLDetailsElement extends HTMLDetailsElementBaseClass implements IHTMLDetailsElement {
  constructor() {
    super();
  }
}
