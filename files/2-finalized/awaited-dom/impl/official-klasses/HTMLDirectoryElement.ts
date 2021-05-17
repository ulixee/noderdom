import StateMachine from '../../base/StateMachine';
import { IHTMLDirectoryElement } from '../../base/interfaces/official';
import { HTMLDirectoryElementGenerator, IHTMLDirectoryElementProperties } from '../../base/official-klasses/HTMLDirectoryElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDirectoryElement, IHTMLDirectoryElementProperties>();
const HTMLDirectoryElementBaseClass = HTMLDirectoryElementGenerator(HTMLElement);

export default class HTMLDirectoryElement extends HTMLDirectoryElementBaseClass implements IHTMLDirectoryElement {
  constructor() {
    super();
  }
}
