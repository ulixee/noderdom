import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLHeadElement } from '../../awaited-base/interfaces/official';
import { HTMLHeadElementGenerator, IHTMLHeadElementProperties } from '../../awaited-base/official-klasses/HTMLHeadElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElement, IHTMLHeadElementProperties>();
const HTMLHeadElementBaseClass = HTMLHeadElementGenerator(HTMLElement);

export default class HTMLHeadElement extends HTMLHeadElementBaseClass implements IHTMLHeadElement {
  constructor() {
    super();
  }
}
