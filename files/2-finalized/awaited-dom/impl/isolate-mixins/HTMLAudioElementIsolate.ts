import StateMachine from '../../base/StateMachine';
import { IHTMLAudioElementIsolate } from '../../base/interfaces/isolate';
import HTMLAudioElementIsolateBase, { IHTMLAudioElementIsolateProperties } from '../../base/isolate-mixins/HTMLAudioElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLAudioElementIsolate, IHTMLAudioElementIsolateProperties>();

export default class HTMLAudioElementIsolate extends HTMLAudioElementIsolateBase implements IHTMLAudioElementIsolate {}
