import StateMachine from '../../base/StateMachine';
import { IHTMLLinkElementIsolate } from '../../base/interfaces/isolate';
import { IDOMTokenList } from '../../base/interfaces/official';
import HTMLLinkElementIsolateBase, { IHTMLLinkElementIsolateProperties } from '../../base/isolate-mixins/HTMLLinkElementIsolate';
import { createDOMTokenList } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLLinkElementIsolate, IHTMLLinkElementIsolateProperties>();

export default class HTMLLinkElementIsolate extends HTMLLinkElementIsolateBase implements IHTMLLinkElementIsolate {
  public get relList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
  }

  public get sizes(): Promise<string> | IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'sizes'), awaitedOptions);
  }
}
