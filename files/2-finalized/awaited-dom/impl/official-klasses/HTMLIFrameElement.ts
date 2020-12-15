import StateMachine from '../../base/StateMachine';
import { IHTMLIFrameElement, IFeaturePolicy, IDOMTokenList } from '../../base/interfaces/official';
import { ISuperDocument } from '../../base/interfaces/super';
import { HTMLIFrameElementGenerator, IHTMLIFrameElementProperties } from '../../base/official-klasses/HTMLIFrameElement';
import { createSuperDocument, createFeaturePolicy, createDOMTokenList } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLIFrameElement, IHTMLIFrameElementProperties>();
const HTMLIFrameElementBaseClass = HTMLIFrameElementGenerator(HTMLElement);

export default class HTMLIFrameElement extends HTMLIFrameElementBaseClass implements IHTMLIFrameElement {
  constructor() {
    super();
  }

  // properties

  public get contentDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty('contentDocument'), awaitedOptions);
  }

  public get featurePolicy(): IFeaturePolicy {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createFeaturePolicy(awaitedPath.addProperty('featurePolicy'), awaitedOptions);
  }

  public get sandbox(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty('sandbox'), awaitedOptions);
  }
}
