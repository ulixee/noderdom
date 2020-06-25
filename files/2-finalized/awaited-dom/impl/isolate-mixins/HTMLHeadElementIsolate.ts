import StateMachine from '../../base/StateMachine';
import { IHTMLHeadElementIsolate } from '../../base/interfaces/isolate';
import HTMLHeadElementIsolateBase, { IHTMLHeadElementIsolateProperties } from '../../base/isolate-mixins/HTMLHeadElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElementIsolate, IHTMLHeadElementIsolateProperties>();

export default class HTMLHeadElementIsolate extends HTMLHeadElementIsolateBase implements IHTMLHeadElementIsolate {}
