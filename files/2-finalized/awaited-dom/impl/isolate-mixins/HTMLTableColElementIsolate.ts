import StateMachine from '../../base/StateMachine';
import { IHTMLTableColElementIsolate } from '../../base/interfaces/isolate';
import HTMLTableColElementIsolateBase, { IHTMLTableColElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableColElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableColElementIsolate, IHTMLTableColElementIsolateProperties>();

export default class HTMLTableColElementIsolate extends HTMLTableColElementIsolateBase implements IHTMLTableColElementIsolate {}
