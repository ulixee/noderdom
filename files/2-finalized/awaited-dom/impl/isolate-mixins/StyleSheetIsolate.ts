import StateMachine from '../../base/StateMachine';
import { IStyleSheetIsolate } from '../../base/interfaces/isolate';
import StyleSheetIsolateBase, { IStyleSheetIsolateProperties } from '../../base/isolate-mixins/StyleSheetIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IStyleSheetIsolate, IStyleSheetIsolateProperties>();

export default class StyleSheetIsolate extends StyleSheetIsolateBase implements IStyleSheetIsolate {}
