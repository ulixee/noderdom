import { IDocumentTypeIsolate } from '../../base/interfaces/isolate';
import DocumentTypeIsolateBase, { IDocumentTypeIsolateProperties } from '../../base/isolate-mixins/DocumentTypeIsolate';
export declare const getState: (instance: IDocumentTypeIsolate) => IDocumentTypeIsolateProperties, setState: (instance: IDocumentTypeIsolate, properties: Partial<IDocumentTypeIsolateProperties>) => void, recordProxy: (proxy: IDocumentTypeIsolate, instance: IDocumentTypeIsolate) => void;
export default class DocumentTypeIsolate extends DocumentTypeIsolateBase implements IDocumentTypeIsolate {
}
