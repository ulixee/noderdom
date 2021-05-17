import StateMachine from '../../base/StateMachine';
import { IHTMLParamElement } from '../../base/interfaces/official';
import { HTMLParamElementGenerator, IHTMLParamElementProperties } from '../../base/official-klasses/HTMLParamElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLParamElement, IHTMLParamElementProperties>();
const HTMLParamElementBaseClass = HTMLParamElementGenerator(HTMLElement);

export default class HTMLParamElement extends HTMLParamElementBaseClass implements IHTMLParamElement {
  constructor() {
    super();
  }
}
