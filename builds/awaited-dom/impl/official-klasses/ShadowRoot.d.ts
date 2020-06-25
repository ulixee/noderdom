import { IShadowRoot } from '../../base/interfaces/official';
import { IShadowRootProperties } from '../../base/official-klasses/ShadowRoot';
export declare const getState: <C = IShadowRoot, P = IShadowRootProperties>(instance: C) => P, setState: <P = IShadowRootProperties>(instance: IShadowRoot, properties: P) => void;
declare const ShadowRootBaseClass: {
    new (): {};
};
export default class ShadowRoot extends ShadowRootBaseClass implements IShadowRoot {
}
export {};
