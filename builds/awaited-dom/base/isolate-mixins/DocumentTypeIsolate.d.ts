import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDocumentTypeIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IDocumentTypeIsolate) => IDocumentTypeIsolateProperties, setState: (instance: IDocumentTypeIsolate, properties: Partial<IDocumentTypeIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IDocumentTypeIsolate>;
export default class DocumentTypeIsolate implements IDocumentTypeIsolate {
    get name(): Promise<string>;
    get publicId(): Promise<string>;
    get systemId(): Promise<string>;
}
export interface IDocumentTypeIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly name?: Promise<string>;
    readonly publicId?: Promise<string>;
    readonly systemId?: Promise<string>;
}
export declare const DocumentTypeIsolatePropertyKeys: string[];
export declare const DocumentTypeIsolateConstantKeys: never[];
