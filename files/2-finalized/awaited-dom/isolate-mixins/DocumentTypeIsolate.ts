import StateMachine from '../../awaited-base/StateMachine';
import { IDocumentTypeIsolate } from '../../awaited-base/interfaces/isolate';
import DocumentTypeIsolateBase, { IDocumentTypeIsolateProperties } from '../../awaited-base/isolate-mixins/DocumentTypeIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentTypeIsolate, IDocumentTypeIsolateProperties>();

export default class DocumentTypeIsolate extends DocumentTypeIsolateBase implements IDocumentTypeIsolate, PromiseLike<IDocumentTypeIsolate> {}
