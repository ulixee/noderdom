import StateMachine from '../../base/StateMachine';
import { IHTMLTableSectionElement } from '../../base/interfaces/official';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import { HTMLTableSectionElementGenerator, IHTMLTableSectionElementProperties } from '../../base/official-klasses/HTMLTableSectionElement';
import { createSuperHTMLCollection } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableSectionElement, IHTMLTableSectionElementProperties>();
const HTMLTableSectionElementBaseClass = HTMLTableSectionElementGenerator(HTMLElement);

export default class HTMLTableSectionElement extends HTMLTableSectionElementBaseClass implements IHTMLTableSectionElement {
  constructor() {
    super();
  }

  // properties

  public get rows(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'rows'), awaitedOptions);
  }
}
