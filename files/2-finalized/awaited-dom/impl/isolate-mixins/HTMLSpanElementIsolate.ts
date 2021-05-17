import StateMachine from '../../base/StateMachine';
import { IHTMLSpanElementIsolate } from '../../base/interfaces/isolate';
import HTMLSpanElementIsolateBase, { IHTMLSpanElementIsolateProperties } from '../../base/isolate-mixins/HTMLSpanElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSpanElementIsolate, IHTMLSpanElementIsolateProperties>();

export default class HTMLSpanElementIsolate extends HTMLSpanElementIsolateBase implements IHTMLSpanElementIsolate {}
