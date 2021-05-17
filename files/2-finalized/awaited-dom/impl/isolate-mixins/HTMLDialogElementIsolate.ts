import StateMachine from '../../base/StateMachine';
import { IHTMLDialogElementIsolate } from '../../base/interfaces/isolate';
import HTMLDialogElementIsolateBase, { IHTMLDialogElementIsolateProperties } from '../../base/isolate-mixins/HTMLDialogElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDialogElementIsolate, IHTMLDialogElementIsolateProperties>();

export default class HTMLDialogElementIsolate extends HTMLDialogElementIsolateBase implements IHTMLDialogElementIsolate {}
