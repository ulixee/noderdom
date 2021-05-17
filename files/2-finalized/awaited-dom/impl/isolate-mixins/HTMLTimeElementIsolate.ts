import StateMachine from '../../base/StateMachine';
import { IHTMLTimeElementIsolate } from '../../base/interfaces/isolate';
import HTMLTimeElementIsolateBase, { IHTMLTimeElementIsolateProperties } from '../../base/isolate-mixins/HTMLTimeElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTimeElementIsolate, IHTMLTimeElementIsolateProperties>();

export default class HTMLTimeElementIsolate extends HTMLTimeElementIsolateBase implements IHTMLTimeElementIsolate {}
