import StateMachine from '../../base/StateMachine';
import { IHTMLQuoteElementIsolate } from '../../base/interfaces/isolate';
import HTMLQuoteElementIsolateBase, { IHTMLQuoteElementIsolateProperties } from '../../base/isolate-mixins/HTMLQuoteElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLQuoteElementIsolate, IHTMLQuoteElementIsolateProperties>();

export default class HTMLQuoteElementIsolate extends HTMLQuoteElementIsolateBase implements IHTMLQuoteElementIsolate {}
