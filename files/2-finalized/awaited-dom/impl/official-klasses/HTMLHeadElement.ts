import StateMachine from '../../base/StateMachine';
import { IHTMLHeadElement } from '../../base/interfaces/official';
import { HTMLHeadElementGenerator, IHTMLHeadElementProperties } from '../../base/official-klasses/HTMLHeadElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElement, IHTMLHeadElementProperties>();
const HTMLHeadElementBaseClass = HTMLHeadElementGenerator(HTMLElement);

export default class HTMLHeadElement extends HTMLHeadElementBaseClass implements IHTMLHeadElement {
  constructor() {
    super();
  }
}
