import { IDocumentFragmentIsolate } from '../../base/interfaces/isolate';
import DocumentFragmentIsolateBase, { IDocumentFragmentIsolateProperties } from '../../base/isolate-mixins/DocumentFragmentIsolate';
export declare const getState: (instance: IDocumentFragmentIsolate) => IDocumentFragmentIsolateProperties, setState: (instance: IDocumentFragmentIsolate, properties: Partial<IDocumentFragmentIsolateProperties>) => void;
export default class DocumentFragmentIsolate extends DocumentFragmentIsolateBase implements IDocumentFragmentIsolate {
}
