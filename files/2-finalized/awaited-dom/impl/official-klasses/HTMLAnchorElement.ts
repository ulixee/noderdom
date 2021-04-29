import StateMachine from '../../base/StateMachine';
import { IHTMLAnchorElement, IDOMTokenList } from '../../base/interfaces/official';
import { HTMLAnchorElementGenerator, IHTMLAnchorElementProperties } from '../../base/official-klasses/HTMLAnchorElement';
import { createDOMTokenList } from '../create';
import HTMLElement from './HTMLElement';
import HTMLHyperlinkElementUtils from '../official-mixins/HTMLHyperlinkElementUtils';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLAnchorElement, IHTMLAnchorElementProperties>();
const HTMLAnchorElementBaseClass = HTMLAnchorElementGenerator(HTMLElement, HTMLHyperlinkElementUtils);

export default class HTMLAnchorElement extends HTMLAnchorElementBaseClass implements IHTMLAnchorElement {
  constructor() {
    super();
  }

  // properties

  public get relList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
  }
}
