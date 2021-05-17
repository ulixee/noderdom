import StateMachine from '../../base/StateMachine';
import { IHTMLProgressElement } from '../../base/interfaces/official';
import { ISuperNodeList } from '../../base/interfaces/super';
import { HTMLProgressElementGenerator, IHTMLProgressElementProperties } from '../../base/official-klasses/HTMLProgressElement';
import { createSuperNodeList } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLProgressElement, IHTMLProgressElementProperties>();
const HTMLProgressElementBaseClass = HTMLProgressElementGenerator(HTMLElement);

export default class HTMLProgressElement extends HTMLProgressElementBaseClass implements IHTMLProgressElement {
  constructor() {
    super();
  }

  // properties

  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty(this, 'labels'), awaitedOptions);
  }
}
