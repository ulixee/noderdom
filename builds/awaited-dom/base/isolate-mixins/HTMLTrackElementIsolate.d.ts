import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTrackElementIsolate } from '../interfaces/isolate';
import { IDocumentReadyState, ITextTrack } from '../interfaces/official';
export declare const getState: (instance: IHTMLTrackElementIsolate) => IHTMLTrackElementIsolateProperties, setState: (instance: IHTMLTrackElementIsolate, properties: Partial<IHTMLTrackElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTrackElementIsolate>;
export default class HTMLTrackElementIsolate implements IHTMLTrackElementIsolate {
    static readonly ERROR: number;
    static readonly LOADED: number;
    static readonly LOADING: number;
    static readonly NONE: number;
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
    get default(): Promise<boolean>;
    get kind(): Promise<string>;
    get label(): Promise<string>;
    get readyState(): Promise<IDocumentReadyState> | Promise<number>;
    get src(): Promise<string>;
    get srclang(): Promise<string>;
    get track(): Promise<ITextTrack>;
}
export interface IHTMLTrackElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly default?: Promise<boolean>;
    readonly kind?: Promise<string>;
    readonly label?: Promise<string>;
    readonly readyState?: Promise<IDocumentReadyState> | Promise<number>;
    readonly src?: Promise<string>;
    readonly srclang?: Promise<string>;
    readonly track?: Promise<ITextTrack>;
}
export declare const HTMLTrackElementIsolatePropertyKeys: string[];
export declare const HTMLTrackElementIsolateConstantKeys: string[];
