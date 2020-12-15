import StateMachine from '../../base/StateMachine';
import { IHTMLDataElementIsolate } from '../../base/interfaces/isolate';
import HTMLDataElementIsolateBase, { IHTMLDataElementIsolateProperties } from '../../base/isolate-mixins/HTMLDataElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDataElementIsolate, IHTMLDataElementIsolateProperties>();

export default class HTMLDataElementIsolate extends HTMLDataElementIsolateBase implements IHTMLDataElementIsolate {}
