import StateMachine from '../../base/StateMachine';
import { IHTMLMetaElementIsolate } from '../../base/interfaces/isolate';
import HTMLMetaElementIsolateBase, { IHTMLMetaElementIsolateProperties } from '../../base/isolate-mixins/HTMLMetaElementIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMetaElementIsolate, IHTMLMetaElementIsolateProperties>();

export default class HTMLMetaElementIsolate extends HTMLMetaElementIsolateBase implements IHTMLMetaElementIsolate {}
