import StateMachine from '../../base/StateMachine';
import { IHTMLTableCellElementIsolate } from '../../base/interfaces/isolate';
import HTMLTableCellElementIsolateBase, { IHTMLTableCellElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableCellElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableCellElementIsolate, IHTMLTableCellElementIsolateProperties>();

export default class HTMLTableCellElementIsolate extends HTMLTableCellElementIsolateBase implements IHTMLTableCellElementIsolate {}
