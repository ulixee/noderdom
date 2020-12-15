import StateMachine from '../../base/StateMachine';
import { IHTMLImageElement } from '../../base/interfaces/official';
import { HTMLImageElementGenerator, IHTMLImageElementProperties } from '../../base/official-klasses/HTMLImageElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLImageElement, IHTMLImageElementProperties>();
const HTMLImageElementBaseClass = HTMLImageElementGenerator(HTMLElement);

export default class HTMLImageElement extends HTMLImageElementBaseClass implements IHTMLImageElement {
  constructor() {
    super();
  }
}
