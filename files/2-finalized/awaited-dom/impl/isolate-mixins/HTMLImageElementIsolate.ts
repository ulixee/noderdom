import StateMachine from '../../base/StateMachine';
import { IHTMLImageElementIsolate } from '../../base/interfaces/isolate';
import HTMLImageElementIsolateBase, { IHTMLImageElementIsolateProperties } from '../../base/isolate-mixins/HTMLImageElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLImageElementIsolate, IHTMLImageElementIsolateProperties>();

export default class HTMLImageElementIsolate extends HTMLImageElementIsolateBase implements IHTMLImageElementIsolate {}
