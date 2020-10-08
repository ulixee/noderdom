import { IShadowRoot } from '../../base/interfaces/official';
import { IShadowRootProperties } from '../../base/official-klasses/ShadowRoot';
export declare const getState: (instance: IShadowRoot) => IShadowRootProperties, setState: (instance: IShadowRoot, properties: Partial<IShadowRootProperties>) => void, recordProxy: (proxy: IShadowRoot, instance: IShadowRoot) => void;
declare const ShadowRootBaseClass: {
    new (): {};
};
export default class ShadowRoot extends ShadowRootBaseClass implements IShadowRoot {
}
export {};
