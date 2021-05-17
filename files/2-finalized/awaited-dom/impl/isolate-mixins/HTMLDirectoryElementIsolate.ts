import StateMachine from '../../base/StateMachine';
import { IHTMLDirectoryElementIsolate } from '../../base/interfaces/isolate';
import HTMLDirectoryElementIsolateBase, { IHTMLDirectoryElementIsolateProperties } from '../../base/isolate-mixins/HTMLDirectoryElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDirectoryElementIsolate, IHTMLDirectoryElementIsolateProperties>();

export default class HTMLDirectoryElementIsolate extends HTMLDirectoryElementIsolateBase implements IHTMLDirectoryElementIsolate {}
