import StateMachine from '../../base/StateMachine';
import { IHTMLFrameElement } from '../../base/interfaces/official';
import { ISuperDocument } from '../../base/interfaces/super';
import { HTMLFrameElementGenerator, IHTMLFrameElementProperties } from '../../base/official-klasses/HTMLFrameElement';
import { createSuperDocument } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFrameElement, IHTMLFrameElementProperties>();
const HTMLFrameElementBaseClass = HTMLFrameElementGenerator(HTMLElement);

export default class HTMLFrameElement extends HTMLFrameElementBaseClass implements IHTMLFrameElement {
  constructor() {
    super();
  }

  // properties

  public get contentDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty('contentDocument'), awaitedOptions);
  }
}
