import StateMachine from '../../base/StateMachine';
import { IHTMLBaseElementIsolate } from '../../base/interfaces/isolate';
import HTMLBaseElementIsolateBase, { IHTMLBaseElementIsolateProperties } from '../../base/isolate-mixins/HTMLBaseElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLBaseElementIsolate, IHTMLBaseElementIsolateProperties>();

export default class HTMLBaseElementIsolate extends HTMLBaseElementIsolateBase implements IHTMLBaseElementIsolate {}
