import StateMachine from '../../base/StateMachine';
import { IHTMLTitleElementIsolate } from '../../base/interfaces/isolate';
import HTMLTitleElementIsolateBase, { IHTMLTitleElementIsolateProperties } from '../../base/isolate-mixins/HTMLTitleElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTitleElementIsolate, IHTMLTitleElementIsolateProperties>();

export default class HTMLTitleElementIsolate extends HTMLTitleElementIsolateBase implements IHTMLTitleElementIsolate {}
