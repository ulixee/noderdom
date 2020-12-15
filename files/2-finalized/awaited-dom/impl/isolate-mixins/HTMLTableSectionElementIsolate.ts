import StateMachine from '../../base/StateMachine';
import { IHTMLTableSectionElementIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import HTMLTableSectionElementIsolateBase, { IHTMLTableSectionElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableSectionElementIsolate';
import { createSuperHTMLCollection } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableSectionElementIsolate, IHTMLTableSectionElementIsolateProperties>();

export default class HTMLTableSectionElementIsolate extends HTMLTableSectionElementIsolateBase implements IHTMLTableSectionElementIsolate {
  public get rows(): Promise<string> | ISuperHTMLCollection | Promise<number> {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('rows'), awaitedOptions);
  }
}
