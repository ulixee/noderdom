import StateMachine from '../../base/StateMachine';
import { IHTMLDListElementIsolate } from '../../base/interfaces/isolate';
import HTMLDListElementIsolateBase, { IHTMLDListElementIsolateProperties } from '../../base/isolate-mixins/HTMLDListElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDListElementIsolate, IHTMLDListElementIsolateProperties>();

export default class HTMLDListElementIsolate extends HTMLDListElementIsolateBase implements IHTMLDListElementIsolate {}
