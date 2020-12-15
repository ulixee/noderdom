import StateMachine from '../../base/StateMachine';
import { IHTMLTableCaptionElementIsolate } from '../../base/interfaces/isolate';
import HTMLTableCaptionElementIsolateBase, { IHTMLTableCaptionElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableCaptionElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableCaptionElementIsolate, IHTMLTableCaptionElementIsolateProperties>();

export default class HTMLTableCaptionElementIsolate extends HTMLTableCaptionElementIsolateBase implements IHTMLTableCaptionElementIsolate {}
