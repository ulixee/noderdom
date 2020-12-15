import StateMachine from '../../base/StateMachine';
import { IHTMLTableCellElement } from '../../base/interfaces/official';
import { HTMLTableCellElementGenerator, IHTMLTableCellElementProperties } from '../../base/official-klasses/HTMLTableCellElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableCellElement, IHTMLTableCellElementProperties>();
const HTMLTableCellElementBaseClass = HTMLTableCellElementGenerator(HTMLElement);

export default class HTMLTableCellElement extends HTMLTableCellElementBaseClass implements IHTMLTableCellElement {
  constructor() {
    super();
  }
}
