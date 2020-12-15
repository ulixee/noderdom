import StateMachine from '../../base/StateMachine';
import { IHTMLDetailsElementIsolate } from '../../base/interfaces/isolate';
import HTMLDetailsElementIsolateBase, { IHTMLDetailsElementIsolateProperties } from '../../base/isolate-mixins/HTMLDetailsElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDetailsElementIsolate, IHTMLDetailsElementIsolateProperties>();

export default class HTMLDetailsElementIsolate extends HTMLDetailsElementIsolateBase implements IHTMLDetailsElementIsolate {}
