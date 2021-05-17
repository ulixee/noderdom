import StateMachine from '../../base/StateMachine';
import { IHTMLStyleElementIsolate } from '../../base/interfaces/isolate';
import HTMLStyleElementIsolateBase, { IHTMLStyleElementIsolateProperties } from '../../base/isolate-mixins/HTMLStyleElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLStyleElementIsolate, IHTMLStyleElementIsolateProperties>();

export default class HTMLStyleElementIsolate extends HTMLStyleElementIsolateBase implements IHTMLStyleElementIsolate {}
