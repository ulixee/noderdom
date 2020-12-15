import StateMachine from '../../base/StateMachine';
import { IHTMLHRElement } from '../../base/interfaces/official';
import { HTMLHRElementGenerator, IHTMLHRElementProperties } from '../../base/official-klasses/HTMLHRElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHRElement, IHTMLHRElementProperties>();
const HTMLHRElementBaseClass = HTMLHRElementGenerator(HTMLElement);

export default class HTMLHRElement extends HTMLHRElementBaseClass implements IHTMLHRElement {
  constructor() {
    super();
  }
}
