import StateMachine from '../../base/StateMachine';
import { IHTMLDataListElementIsolate } from '../../base/interfaces/isolate';
import HTMLDataListElementIsolateBase, { IHTMLDataListElementIsolateProperties } from '../../base/isolate-mixins/HTMLDataListElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDataListElementIsolate, IHTMLDataListElementIsolateProperties>();

export default class HTMLDataListElementIsolate extends HTMLDataListElementIsolateBase implements IHTMLDataListElementIsolate {}
