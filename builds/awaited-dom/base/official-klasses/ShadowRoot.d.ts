import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IShadowRoot } from '../interfaces/official';
export declare const getState: <C = IShadowRoot, P = IShadowRootProperties>(instance: C) => P, setState: <P = IShadowRootProperties>(instance: IShadowRoot, properties: P) => void;
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
