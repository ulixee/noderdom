import StateMachine from '../../base/StateMachine';
import { IHTMLScriptElement } from '../../base/interfaces/official';
import { HTMLScriptElementGenerator, IHTMLScriptElementProperties } from '../../base/official-klasses/HTMLScriptElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLScriptElement, IHTMLScriptElementProperties>();
const HTMLScriptElementBaseClass = HTMLScriptElementGenerator(HTMLElement);

export default class HTMLScriptElement extends HTMLScriptElementBaseClass implements IHTMLScriptElement {
  constructor() {
    super();
  }
}
