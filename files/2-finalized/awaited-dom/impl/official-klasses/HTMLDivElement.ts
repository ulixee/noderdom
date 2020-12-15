import StateMachine from '../../base/StateMachine';
import { IHTMLDivElement } from '../../base/interfaces/official';
import { HTMLDivElementGenerator, IHTMLDivElementProperties } from '../../base/official-klasses/HTMLDivElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDivElement, IHTMLDivElementProperties>();
const HTMLDivElementBaseClass = HTMLDivElementGenerator(HTMLElement);

export default class HTMLDivElement extends HTMLDivElementBaseClass implements IHTMLDivElement {
  constructor() {
    super();
  }
}
