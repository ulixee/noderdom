import StateMachine from '../../base/StateMachine';
import { IHTMLSlotElementIsolate } from '../../base/interfaces/isolate';
import HTMLSlotElementIsolateBase, { IHTMLSlotElementIsolateProperties } from '../../base/isolate-mixins/HTMLSlotElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSlotElementIsolate, IHTMLSlotElementIsolateProperties>();

export default class HTMLSlotElementIsolate extends HTMLSlotElementIsolateBase implements IHTMLSlotElementIsolate {}
