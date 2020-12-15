import StateMachine from '../../base/StateMachine';
import { IHTMLHeadingElement } from '../../base/interfaces/official';
import { HTMLHeadingElementGenerator, IHTMLHeadingElementProperties } from '../../base/official-klasses/HTMLHeadingElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHeadingElement, IHTMLHeadingElementProperties>();
const HTMLHeadingElementBaseClass = HTMLHeadingElementGenerator(HTMLElement);

export default class HTMLHeadingElement extends HTMLHeadingElementBaseClass implements IHTMLHeadingElement {
  constructor() {
    super();
  }
}
