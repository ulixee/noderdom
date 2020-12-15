import StateMachine from '../../base/StateMachine';
import { IHTMLEmbedElementIsolate } from '../../base/interfaces/isolate';
import HTMLEmbedElementIsolateBase, { IHTMLEmbedElementIsolateProperties } from '../../base/isolate-mixins/HTMLEmbedElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLEmbedElementIsolate, IHTMLEmbedElementIsolateProperties>();

export default class HTMLEmbedElementIsolate extends HTMLEmbedElementIsolateBase implements IHTMLEmbedElementIsolate {}
