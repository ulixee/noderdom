import { IDocumentTypeIsolate } from '../../base/interfaces/isolate';
import DocumentTypeIsolateBase, { IDocumentTypeIsolateProperties } from '../../base/isolate-mixins/DocumentTypeIsolate';
export declare const getState: <C = IDocumentTypeIsolate, P = IDocumentTypeIsolateProperties>(instance: C) => P, setState: <P = IDocumentTypeIsolateProperties>(instance: IDocumentTypeIsolate, properties: P) => void;
export default class DocumentTypeIsolate extends DocumentTypeIsolateBase implements IDocumentTypeIsolate {
}
