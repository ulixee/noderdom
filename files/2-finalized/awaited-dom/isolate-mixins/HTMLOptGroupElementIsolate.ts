import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLOptGroupElementIsolate } from '../../awaited-base/interfaces/isolate';
import HTMLOptGroupElementIsolateBase, { IHTMLOptGroupElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLOptGroupElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptGroupElementIsolate, IHTMLOptGroupElementIsolateProperties>();

export default class HTMLOptGroupElementIsolate extends HTMLOptGroupElementIsolateBase implements IHTMLOptGroupElementIsolate {}
