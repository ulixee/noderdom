import StateMachine from '../../base/StateMachine';
import { IHTMLParamElementIsolate } from '../../base/interfaces/isolate';
import HTMLParamElementIsolateBase, { IHTMLParamElementIsolateProperties } from '../../base/isolate-mixins/HTMLParamElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLParamElementIsolate, IHTMLParamElementIsolateProperties>();

export default class HTMLParamElementIsolate extends HTMLParamElementIsolateBase implements IHTMLParamElementIsolate {}
