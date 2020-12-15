import StateMachine from '../../base/StateMachine';
import { IHTMLParagraphElementIsolate } from '../../base/interfaces/isolate';
import HTMLParagraphElementIsolateBase, { IHTMLParagraphElementIsolateProperties } from '../../base/isolate-mixins/HTMLParagraphElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLParagraphElementIsolate, IHTMLParagraphElementIsolateProperties>();

export default class HTMLParagraphElementIsolate extends HTMLParagraphElementIsolateBase implements IHTMLParagraphElementIsolate {}
