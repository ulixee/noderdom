import StateMachine from '../../base/StateMachine';
import { IHTMLModElementIsolate } from '../../base/interfaces/isolate';
import HTMLModElementIsolateBase, { IHTMLModElementIsolateProperties } from '../../base/isolate-mixins/HTMLModElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLModElementIsolate, IHTMLModElementIsolateProperties>();

export default class HTMLModElementIsolate extends HTMLModElementIsolateBase implements IHTMLModElementIsolate {}
