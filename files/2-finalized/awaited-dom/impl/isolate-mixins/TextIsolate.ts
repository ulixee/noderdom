import StateMachine from '../../base/StateMachine';
import { ITextIsolate } from '../../base/interfaces/isolate';
import TextIsolateBase, { ITextIsolateProperties } from '../../base/isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITextIsolate, ITextIsolateProperties>();

export default class TextIsolate extends TextIsolateBase implements ITextIsolate {}
