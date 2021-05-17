import StateMachine from '../../base/StateMachine';
import { IHTMLFrameSetElementIsolate } from '../../base/interfaces/isolate';
import HTMLFrameSetElementIsolateBase, { IHTMLFrameSetElementIsolateProperties } from '../../base/isolate-mixins/HTMLFrameSetElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFrameSetElementIsolate, IHTMLFrameSetElementIsolateProperties>();

export default class HTMLFrameSetElementIsolate extends HTMLFrameSetElementIsolateBase implements IHTMLFrameSetElementIsolate {}
