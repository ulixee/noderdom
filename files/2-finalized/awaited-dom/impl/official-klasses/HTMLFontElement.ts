import StateMachine from '../../base/StateMachine';
import { IHTMLFontElement } from '../../base/interfaces/official';
import { HTMLFontElementGenerator, IHTMLFontElementProperties } from '../../base/official-klasses/HTMLFontElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFontElement, IHTMLFontElementProperties>();
const HTMLFontElementBaseClass = HTMLFontElementGenerator(HTMLElement);

export default class HTMLFontElement extends HTMLFontElementBaseClass implements IHTMLFontElement {
  constructor() {
    super();
  }
}
