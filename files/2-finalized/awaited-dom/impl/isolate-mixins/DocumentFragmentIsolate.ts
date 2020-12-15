import StateMachine from '../../base/StateMachine';
import { IDocumentFragmentIsolate } from '../../base/interfaces/isolate';
import DocumentFragmentIsolateBase, { IDocumentFragmentIsolateProperties } from '../../base/isolate-mixins/DocumentFragmentIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDocumentFragmentIsolate, IDocumentFragmentIsolateProperties>();

export default class DocumentFragmentIsolate extends DocumentFragmentIsolateBase implements IDocumentFragmentIsolate {}
