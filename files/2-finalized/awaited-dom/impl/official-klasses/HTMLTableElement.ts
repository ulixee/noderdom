import StateMachine from '../../base/StateMachine';
import { IHTMLTableElement, IHTMLTableCaptionElement, IHTMLTableSectionElement } from '../../base/interfaces/official';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import { HTMLTableElementGenerator, IHTMLTableElementProperties } from '../../base/official-klasses/HTMLTableElement';
import { createHTMLTableCaptionElement, createSuperHTMLCollection, createHTMLTableSectionElement } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableElement, IHTMLTableElementProperties>();
const HTMLTableElementBaseClass = HTMLTableElementGenerator(HTMLElement);

export default class HTMLTableElement extends HTMLTableElementBaseClass implements IHTMLTableElement {
  constructor() {
    super();
  }

  // properties

  public get caption(): IHTMLTableCaptionElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLTableCaptionElement(awaitedPath.addProperty(this, 'caption'), awaitedOptions);
  }

  public get rows(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'rows'), awaitedOptions);
  }

  public get tBodies(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'tBodies'), awaitedOptions);
  }

  public get tFoot(): IHTMLTableSectionElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLTableSectionElement(awaitedPath.addProperty(this, 'tFoot'), awaitedOptions);
  }

  public get tHead(): IHTMLTableSectionElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLTableSectionElement(awaitedPath.addProperty(this, 'tHead'), awaitedOptions);
  }
}
