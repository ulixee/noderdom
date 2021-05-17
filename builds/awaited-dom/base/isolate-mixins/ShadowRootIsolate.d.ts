import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IShadowRootIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';
import { IShadowRootMode } from '../interfaces/official';
export declare const getState: (instance: IShadowRootIsolate) => IShadowRootIsolateProperties, setState: (instance: IShadowRootIsolate, properties: Partial<IShadowRootIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IShadowRootIsolate>;
export default class ShadowRootIsolate implements IShadowRootIsolate {
    get delegatesFocus(): Promise<boolean>;
    get host(): Promise<string> | ISuperElement;
    get innerHTML(): Promise<string>;
    get mode(): Promise<IShadowRootMode>;
}
export interface IShadowRootIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly delegatesFocus?: Promise<boolean>;
    readonly host?: Promise<string> | ISuperElement;
    readonly innerHTML?: Promise<string>;
    readonly mode?: Promise<IShadowRootMode>;
}
export declare const ShadowRootIsolatePropertyKeys: string[];
export declare const ShadowRootIsolateConstantKeys: never[];
