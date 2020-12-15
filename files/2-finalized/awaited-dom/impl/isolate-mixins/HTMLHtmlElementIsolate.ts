import StateMachine from '../../base/StateMachine';
import { IHTMLHtmlElementIsolate } from '../../base/interfaces/isolate';
import HTMLHtmlElementIsolateBase, { IHTMLHtmlElementIsolateProperties } from '../../base/isolate-mixins/HTMLHtmlElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHtmlElementIsolate, IHTMLHtmlElementIsolateProperties>();

export default class HTMLHtmlElementIsolate extends HTMLHtmlElementIsolateBase implements IHTMLHtmlElementIsolate {}
