import StateMachine from '../../base/StateMachine';
import { IHTMLModElement } from '../../base/interfaces/official';
import { HTMLModElementGenerator, IHTMLModElementProperties } from '../../base/official-klasses/HTMLModElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLModElement, IHTMLModElementProperties>();
const HTMLModElementBaseClass = HTMLModElementGenerator(HTMLElement);

export default class HTMLModElement extends HTMLModElementBaseClass implements IHTMLModElement {
  constructor() {
    super();
  }
}
