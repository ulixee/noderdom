import StateMachine from '../../base/StateMachine';
import { IHTMLBRElementIsolate } from '../../base/interfaces/isolate';
import HTMLBRElementIsolateBase, { IHTMLBRElementIsolateProperties } from '../../base/isolate-mixins/HTMLBRElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLBRElementIsolate, IHTMLBRElementIsolateProperties>();

export default class HTMLBRElementIsolate extends HTMLBRElementIsolateBase implements IHTMLBRElementIsolate {}
