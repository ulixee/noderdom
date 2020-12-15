import StateMachine from '../../base/StateMachine';
import { IHTMLTableRowElement, IHTMLTableCellElement } from '../../base/interfaces/official';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import { HTMLTableRowElementGenerator, IHTMLTableRowElementProperties } from '../../base/official-klasses/HTMLTableRowElement';
import { createSuperHTMLCollection, createHTMLTableCellElement } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableRowElement, IHTMLTableRowElementProperties>();
const HTMLTableRowElementBaseClass = HTMLTableRowElementGenerator(HTMLElement);

export default class HTMLTableRowElement extends HTMLTableRowElementBaseClass implements IHTMLTableRowElement {
  constructor() {
    super();
  }

  // properties

  public get cells(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('cells'), awaitedOptions);
  }

  // methods

  public insertCell(index?: number): IHTMLTableCellElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLTableCellElement(awaitedPath.addMethod('insertCell', index), awaitedOptions);
  }
}
