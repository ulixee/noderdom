import StateMachine from '../../base/StateMachine';
import { IHTMLHRElementIsolate } from '../../base/interfaces/isolate';
import HTMLHRElementIsolateBase, { IHTMLHRElementIsolateProperties } from '../../base/isolate-mixins/HTMLHRElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHRElementIsolate, IHTMLHRElementIsolateProperties>();

export default class HTMLHRElementIsolate extends HTMLHRElementIsolateBase implements IHTMLHRElementIsolate {}
