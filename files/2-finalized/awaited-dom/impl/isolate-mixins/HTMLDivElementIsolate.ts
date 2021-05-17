import StateMachine from '../../base/StateMachine';
import { IHTMLDivElementIsolate } from '../../base/interfaces/isolate';
import HTMLDivElementIsolateBase, { IHTMLDivElementIsolateProperties } from '../../base/isolate-mixins/HTMLDivElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDivElementIsolate, IHTMLDivElementIsolateProperties>();

export default class HTMLDivElementIsolate extends HTMLDivElementIsolateBase implements IHTMLDivElementIsolate {}
