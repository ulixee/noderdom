import StateMachine from '../../base/StateMachine';
import { IDocumentTypeIsolate } from '../../base/interfaces/isolate';
import DocumentTypeIsolateBase, { IDocumentTypeIsolateProperties } from '../../base/isolate-mixins/DocumentTypeIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentTypeIsolate, IDocumentTypeIsolateProperties>();

export default class DocumentTypeIsolate extends DocumentTypeIsolateBase implements IDocumentTypeIsolate {}
