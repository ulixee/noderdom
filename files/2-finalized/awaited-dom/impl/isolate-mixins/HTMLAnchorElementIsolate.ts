import StateMachine from '../../base/StateMachine';
import { IHTMLAnchorElementIsolate } from '../../base/interfaces/isolate';
import { IDOMTokenList } from '../../base/interfaces/official';
import HTMLAnchorElementIsolateBase, { IHTMLAnchorElementIsolateProperties } from '../../base/isolate-mixins/HTMLAnchorElementIsolate';
import { createDOMTokenList } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLAnchorElementIsolate, IHTMLAnchorElementIsolateProperties>();

export default class HTMLAnchorElementIsolate extends HTMLAnchorElementIsolateBase implements IHTMLAnchorElementIsolate {
  public get relList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty('relList'), awaitedOptions);
  }
}
