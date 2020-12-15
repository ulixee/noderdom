import StateMachine from '../../base/StateMachine';
import { IHTMLLIElementIsolate } from '../../base/interfaces/isolate';
import HTMLLIElementIsolateBase, { IHTMLLIElementIsolateProperties } from '../../base/isolate-mixins/HTMLLIElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLIElementIsolate, IHTMLLIElementIsolateProperties>();

export default class HTMLLIElementIsolate extends HTMLLIElementIsolateBase implements IHTMLLIElementIsolate {}
