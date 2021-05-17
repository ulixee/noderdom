import StateMachine from '../../base/StateMachine';
import { IHTMLLinkElement, IDOMTokenList } from '../../base/interfaces/official';
import { HTMLLinkElementGenerator, IHTMLLinkElementProperties } from '../../base/official-klasses/HTMLLinkElement';
import { createDOMTokenList } from '../create';
import HTMLElement from './HTMLElement';
import LinkStyle from '../official-mixins/LinkStyle';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLLinkElement, IHTMLLinkElementProperties>();
const HTMLLinkElementBaseClass = HTMLLinkElementGenerator(HTMLElement, LinkStyle);

export default class HTMLLinkElement extends HTMLLinkElementBaseClass implements IHTMLLinkElement {
  constructor() {
    super();
  }

  // properties

  public get relList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
  }

  public get sizes(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'sizes'), awaitedOptions);
  }
}
