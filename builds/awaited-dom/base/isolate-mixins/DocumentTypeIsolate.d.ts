import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDocumentTypeIsolate } from '../interfaces/isolate';
export declare const getState: <C = IDocumentTypeIsolate, P = IDocumentTypeIsolateProperties>(instance: C) => P, setState: <P = IDocumentTypeIsolateProperties>(instance: IDocumentTypeIsolate, properties: P) => void;
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
