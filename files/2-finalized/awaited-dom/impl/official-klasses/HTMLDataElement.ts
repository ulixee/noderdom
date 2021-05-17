import StateMachine from '../../base/StateMachine';
import { IHTMLDataElement } from '../../base/interfaces/official';
import { HTMLDataElementGenerator, IHTMLDataElementProperties } from '../../base/official-klasses/HTMLDataElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDataElement, IHTMLDataElementProperties>();
const HTMLDataElementBaseClass = HTMLDataElementGenerator(HTMLElement);

export default class HTMLDataElement extends HTMLDataElementBaseClass implements IHTMLDataElement {
  constructor() {
    super();
  }
}
