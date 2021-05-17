import StateMachine from '../../base/StateMachine';
import { IHTMLSourceElementIsolate } from '../../base/interfaces/isolate';
import HTMLSourceElementIsolateBase, { IHTMLSourceElementIsolateProperties } from '../../base/isolate-mixins/HTMLSourceElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSourceElementIsolate, IHTMLSourceElementIsolateProperties>();

export default class HTMLSourceElementIsolate extends HTMLSourceElementIsolateBase implements IHTMLSourceElementIsolate {}
