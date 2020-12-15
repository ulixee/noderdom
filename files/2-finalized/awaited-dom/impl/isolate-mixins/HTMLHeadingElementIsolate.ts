import StateMachine from '../../base/StateMachine';
import { IHTMLHeadingElementIsolate } from '../../base/interfaces/isolate';
import HTMLHeadingElementIsolateBase, { IHTMLHeadingElementIsolateProperties } from '../../base/isolate-mixins/HTMLHeadingElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHeadingElementIsolate, IHTMLHeadingElementIsolateProperties>();

export default class HTMLHeadingElementIsolate extends HTMLHeadingElementIsolateBase implements IHTMLHeadingElementIsolate {}
