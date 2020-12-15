import StateMachine from '../../base/StateMachine';
import { IHTMLScriptElementIsolate } from '../../base/interfaces/isolate';
import HTMLScriptElementIsolateBase, { IHTMLScriptElementIsolateProperties } from '../../base/isolate-mixins/HTMLScriptElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLScriptElementIsolate, IHTMLScriptElementIsolateProperties>();

export default class HTMLScriptElementIsolate extends HTMLScriptElementIsolateBase implements IHTMLScriptElementIsolate {}
