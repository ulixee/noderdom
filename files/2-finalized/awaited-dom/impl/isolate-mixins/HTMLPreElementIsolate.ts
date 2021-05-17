import StateMachine from '../../base/StateMachine';
import { IHTMLPreElementIsolate } from '../../base/interfaces/isolate';
import HTMLPreElementIsolateBase, { IHTMLPreElementIsolateProperties } from '../../base/isolate-mixins/HTMLPreElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLPreElementIsolate, IHTMLPreElementIsolateProperties>();

export default class HTMLPreElementIsolate extends HTMLPreElementIsolateBase implements IHTMLPreElementIsolate {}
