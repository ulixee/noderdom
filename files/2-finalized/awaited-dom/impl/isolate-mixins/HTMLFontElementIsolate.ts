import StateMachine from '../../base/StateMachine';
import { IHTMLFontElementIsolate } from '../../base/interfaces/isolate';
import HTMLFontElementIsolateBase, { IHTMLFontElementIsolateProperties } from '../../base/isolate-mixins/HTMLFontElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLFontElementIsolate, IHTMLFontElementIsolateProperties>();

export default class HTMLFontElementIsolate extends HTMLFontElementIsolateBase implements IHTMLFontElementIsolate {}
