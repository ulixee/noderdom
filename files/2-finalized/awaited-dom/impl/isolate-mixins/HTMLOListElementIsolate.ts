import StateMachine from '../../base/StateMachine';
import { IHTMLOListElementIsolate } from '../../base/interfaces/isolate';
import HTMLOListElementIsolateBase, { IHTMLOListElementIsolateProperties } from '../../base/isolate-mixins/HTMLOListElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOListElementIsolate, IHTMLOListElementIsolateProperties>();

export default class HTMLOListElementIsolate extends HTMLOListElementIsolateBase implements IHTMLOListElementIsolate {}
