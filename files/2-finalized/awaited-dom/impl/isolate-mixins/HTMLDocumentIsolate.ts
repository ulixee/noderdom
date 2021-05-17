import StateMachine from '../../base/StateMachine';
import { IHTMLDocumentIsolate } from '../../base/interfaces/isolate';
import HTMLDocumentIsolateBase, { IHTMLDocumentIsolateProperties } from '../../base/isolate-mixins/HTMLDocumentIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDocumentIsolate, IHTMLDocumentIsolateProperties>();

export default class HTMLDocumentIsolate extends HTMLDocumentIsolateBase implements IHTMLDocumentIsolate {}
