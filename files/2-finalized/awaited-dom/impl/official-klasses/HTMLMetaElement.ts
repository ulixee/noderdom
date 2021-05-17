import StateMachine from '../../base/StateMachine';
import { IHTMLMetaElement } from '../../base/interfaces/official';
import { HTMLMetaElementGenerator, IHTMLMetaElementProperties } from '../../base/official-klasses/HTMLMetaElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLMetaElement, IHTMLMetaElementProperties>();
const HTMLMetaElementBaseClass = HTMLMetaElementGenerator(HTMLElement);

export default class HTMLMetaElement extends HTMLMetaElementBaseClass implements IHTMLMetaElement {
  constructor() {
    super();
  }
}
