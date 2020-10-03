import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IShadowRoot } from '../interfaces/official';
export declare const getState: (instance: IShadowRoot) => IShadowRootProperties, setState: (instance: IShadowRoot, properties: Partial<IShadowRootProperties>) => void, recordProxy: (proxy: IShadowRoot, instance: IShadowRoot) => void;
export declare const awaitedHandler: AwaitedHandler<IShadowRoot>;
export declare function ShadowRootGenerator(): {
    new (): {};
};
export interface IShadowRootProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const ShadowRootPropertyKeys: never[];
export declare const ShadowRootConstantKeys: never[];
