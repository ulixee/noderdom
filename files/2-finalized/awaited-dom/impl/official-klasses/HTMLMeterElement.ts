import StateMachine from '../../base/StateMachine';
import { IHTMLMeterElement } from '../../base/interfaces/official';
import { ISuperNodeList } from '../../base/interfaces/super';
import { HTMLMeterElementGenerator, IHTMLMeterElementProperties } from '../../base/official-klasses/HTMLMeterElement';
import { createSuperNodeList } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLMeterElement, IHTMLMeterElementProperties>();
const HTMLMeterElementBaseClass = HTMLMeterElementGenerator(HTMLElement);

export default class HTMLMeterElement extends HTMLMeterElementBaseClass implements IHTMLMeterElement {
  constructor() {
    super();
  }

  // properties

  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty(this, 'labels'), awaitedOptions);
  }
}
