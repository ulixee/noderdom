import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLHeadElementIsolate } from '../../awaited-base/interfaces/isolate';
import HTMLHeadElementIsolateBase, { IHTMLHeadElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLHeadElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElementIsolate, IHTMLHeadElementIsolateProperties>();

export default class HTMLHeadElementIsolate extends HTMLHeadElementIsolateBase implements IHTMLHeadElementIsolate {}
