import StateMachine from '../../base/StateMachine';
import { IHTMLBRElement } from '../../base/interfaces/official';
import { HTMLBRElementGenerator, IHTMLBRElementProperties } from '../../base/official-klasses/HTMLBRElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLBRElement, IHTMLBRElementProperties>();
const HTMLBRElementBaseClass = HTMLBRElementGenerator(HTMLElement);

export default class HTMLBRElement extends HTMLBRElementBaseClass implements IHTMLBRElement {
  constructor() {
    super();
  }
}
