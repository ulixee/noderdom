import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLFormElementIsolate } from '../../awaited-base/interfaces/isolate';
import HTMLFormElementIsolateBase, { IHTMLFormElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLFormElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFormElementIsolate, IHTMLFormElementIsolateProperties>();

export default class HTMLFormElementIsolate extends HTMLFormElementIsolateBase implements IHTMLFormElementIsolate {}
