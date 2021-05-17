import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDocumentFragmentIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IDocumentFragmentIsolate) => IDocumentFragmentIsolateProperties, setState: (instance: IDocumentFragmentIsolate, properties: Partial<IDocumentFragmentIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IDocumentFragmentIsolate>;
export default class DocumentFragmentIsolate implements IDocumentFragmentIsolate {
}
export interface IDocumentFragmentIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const DocumentFragmentIsolatePropertyKeys: never[];
export declare const DocumentFragmentIsolateConstantKeys: never[];
