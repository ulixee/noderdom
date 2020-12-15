import StateMachine from '../../base/StateMachine';
import { IHTMLProgressElementIsolate } from '../../base/interfaces/isolate';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLProgressElementIsolateBase, { IHTMLProgressElementIsolateProperties } from '../../base/isolate-mixins/HTMLProgressElementIsolate';
import { createSuperNodeList } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLProgressElementIsolate, IHTMLProgressElementIsolateProperties>();

export default class HTMLProgressElementIsolate extends HTMLProgressElementIsolateBase implements IHTMLProgressElementIsolate {
  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty('labels'), awaitedOptions);
  }
}
