import StateMachine from '../../base/StateMachine';
import { IHTMLTableRowElementIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import { IHTMLTableCellElement } from '../../base/interfaces/official';
import HTMLTableRowElementIsolateBase, { IHTMLTableRowElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableRowElementIsolate';
import { createSuperHTMLCollection, createHTMLTableCellElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTableRowElementIsolate, IHTMLTableRowElementIsolateProperties>();

export default class HTMLTableRowElementIsolate extends HTMLTableRowElementIsolateBase implements IHTMLTableRowElementIsolate {
  public get cells(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'cells'), awaitedOptions);
  }

  // methods

  public insertCell(index?: number): IHTMLTableCellElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLTableCellElement(awaitedPath.addMethod(this, 'insertCell', index), awaitedOptions);
  }
}
