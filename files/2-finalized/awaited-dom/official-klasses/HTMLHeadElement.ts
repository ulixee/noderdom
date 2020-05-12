import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLHeadElement } from '../../awaited-base/interfaces/official';
import { HTMLHeadElementGenerator, IHTMLHeadElementProperties } from '../../awaited-base/official-klasses/HTMLHeadElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElement, IHTMLHeadElementProperties>();
const HTMLHeadElementBase = HTMLHeadElementGenerator(HTMLElement);

export default class HTMLHeadElement extends HTMLHeadElementBase implements IHTMLHeadElement {
  constructor() {
    super();
  }
}
