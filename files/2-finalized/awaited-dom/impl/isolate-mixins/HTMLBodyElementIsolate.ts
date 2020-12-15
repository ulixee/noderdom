import StateMachine from '../../base/StateMachine';
import { IHTMLBodyElementIsolate } from '../../base/interfaces/isolate';
import HTMLBodyElementIsolateBase, { IHTMLBodyElementIsolateProperties } from '../../base/isolate-mixins/HTMLBodyElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLBodyElementIsolate, IHTMLBodyElementIsolateProperties>();

export default class HTMLBodyElementIsolate extends HTMLBodyElementIsolateBase implements IHTMLBodyElementIsolate {}
