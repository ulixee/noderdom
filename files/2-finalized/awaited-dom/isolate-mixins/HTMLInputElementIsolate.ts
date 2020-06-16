import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLInputElementIsolate } from '../../awaited-base/interfaces/isolate';
import HTMLInputElementIsolateBase, { IHTMLInputElementIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLInputElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElementIsolate, IHTMLInputElementIsolateProperties>();

export default class HTMLInputElementIsolate extends HTMLInputElementIsolateBase implements IHTMLInputElementIsolate, PromiseLike<IHTMLInputElementIsolate> {}
