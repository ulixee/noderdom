import StateMachine from '../../base/StateMachine';
import { IHTMLUListElementIsolate } from '../../base/interfaces/isolate';
import HTMLUListElementIsolateBase, { IHTMLUListElementIsolateProperties } from '../../base/isolate-mixins/HTMLUListElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLUListElementIsolate, IHTMLUListElementIsolateProperties>();

export default class HTMLUListElementIsolate extends HTMLUListElementIsolateBase implements IHTMLUListElementIsolate {}
