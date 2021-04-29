import StateMachine from '../../base/StateMachine';
import { IHTMLAreaElement, IDOMTokenList } from '../../base/interfaces/official';
import { HTMLAreaElementGenerator, IHTMLAreaElementProperties } from '../../base/official-klasses/HTMLAreaElement';
import { createDOMTokenList } from '../create';
import HTMLElement from './HTMLElement';
import HTMLHyperlinkElementUtils from '../official-mixins/HTMLHyperlinkElementUtils';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLAreaElement, IHTMLAreaElementProperties>();
const HTMLAreaElementBaseClass = HTMLAreaElementGenerator(HTMLElement, HTMLHyperlinkElementUtils);

export default class HTMLAreaElement extends HTMLAreaElementBaseClass implements IHTMLAreaElement {
  constructor() {
    super();
  }

  // properties

  public get relList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
  }
}
