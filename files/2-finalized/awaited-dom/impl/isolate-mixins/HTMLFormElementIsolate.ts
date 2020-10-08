import StateMachine from '../../base/StateMachine';
import { IHTMLFormElementIsolate } from '../../base/interfaces/isolate';
import HTMLFormElementIsolateBase, { IHTMLFormElementIsolateProperties } from '../../base/isolate-mixins/HTMLFormElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFormElementIsolate, IHTMLFormElementIsolateProperties>();

export default class HTMLFormElementIsolate extends HTMLFormElementIsolateBase implements IHTMLFormElementIsolate {}
