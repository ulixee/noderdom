import StateMachine from '../../base/StateMachine';
import { IHTMLFrameSetElement } from '../../base/interfaces/official';
import { HTMLFrameSetElementGenerator, IHTMLFrameSetElementProperties } from '../../base/official-klasses/HTMLFrameSetElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFrameSetElement, IHTMLFrameSetElementProperties>();
const HTMLFrameSetElementBaseClass = HTMLFrameSetElementGenerator(HTMLElement);

export default class HTMLFrameSetElement extends HTMLFrameSetElementBaseClass implements IHTMLFrameSetElement {
  constructor() {
    super();
  }
}
