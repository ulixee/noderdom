import StateMachine from '../../base/StateMachine';
import { IHTMLAreaElementIsolate } from '../../base/interfaces/isolate';
import { IDOMTokenList } from '../../base/interfaces/official';
import HTMLAreaElementIsolateBase, { IHTMLAreaElementIsolateProperties } from '../../base/isolate-mixins/HTMLAreaElementIsolate';
import { createDOMTokenList } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLAreaElementIsolate, IHTMLAreaElementIsolateProperties>();

export default class HTMLAreaElementIsolate extends HTMLAreaElementIsolateBase implements IHTMLAreaElementIsolate {
  public get relList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
  }
}
