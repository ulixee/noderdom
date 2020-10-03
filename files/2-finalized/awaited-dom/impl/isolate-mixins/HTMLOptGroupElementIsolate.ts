import StateMachine from '../../base/StateMachine';
import { IHTMLOptGroupElementIsolate } from '../../base/interfaces/isolate';
import HTMLOptGroupElementIsolateBase, { IHTMLOptGroupElementIsolateProperties } from '../../base/isolate-mixins/HTMLOptGroupElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLOptGroupElementIsolate, IHTMLOptGroupElementIsolateProperties>();

export default class HTMLOptGroupElementIsolate extends HTMLOptGroupElementIsolateBase implements IHTMLOptGroupElementIsolate {}
