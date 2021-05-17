import StateMachine from '../../base/StateMachine';
import { IHTMLBaseElement } from '../../base/interfaces/official';
import { HTMLBaseElementGenerator, IHTMLBaseElementProperties } from '../../base/official-klasses/HTMLBaseElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLBaseElement, IHTMLBaseElementProperties>();
const HTMLBaseElementBaseClass = HTMLBaseElementGenerator(HTMLElement);

export default class HTMLBaseElement extends HTMLBaseElementBaseClass implements IHTMLBaseElement {
  constructor() {
    super();
  }
}
