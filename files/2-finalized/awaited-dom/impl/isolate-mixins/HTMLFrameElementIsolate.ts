import StateMachine from '../../base/StateMachine';
import { IHTMLFrameElementIsolate } from '../../base/interfaces/isolate';
import { ISuperDocument } from '../../base/interfaces/super';
import HTMLFrameElementIsolateBase, { IHTMLFrameElementIsolateProperties } from '../../base/isolate-mixins/HTMLFrameElementIsolate';
import { createSuperDocument } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFrameElementIsolate, IHTMLFrameElementIsolateProperties>();

export default class HTMLFrameElementIsolate extends HTMLFrameElementIsolateBase implements IHTMLFrameElementIsolate {
  public get contentDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty(this, 'contentDocument'), awaitedOptions);
  }
}
