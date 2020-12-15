import StateMachine from '../../base/StateMachine';
import { IHTMLPreElement } from '../../base/interfaces/official';
import { HTMLPreElementGenerator, IHTMLPreElementProperties } from '../../base/official-klasses/HTMLPreElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLPreElement, IHTMLPreElementProperties>();
const HTMLPreElementBaseClass = HTMLPreElementGenerator(HTMLElement);

export default class HTMLPreElement extends HTMLPreElementBaseClass implements IHTMLPreElement {
  constructor() {
    super();
  }
}
