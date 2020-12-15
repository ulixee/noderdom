import StateMachine from '../../base/StateMachine';
import { IHTMLTableColElement } from '../../base/interfaces/official';
import { HTMLTableColElementGenerator, IHTMLTableColElementProperties } from '../../base/official-klasses/HTMLTableColElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableColElement, IHTMLTableColElementProperties>();
const HTMLTableColElementBaseClass = HTMLTableColElementGenerator(HTMLElement);

export default class HTMLTableColElement extends HTMLTableColElementBaseClass implements IHTMLTableColElement {
  constructor() {
    super();
  }
}
