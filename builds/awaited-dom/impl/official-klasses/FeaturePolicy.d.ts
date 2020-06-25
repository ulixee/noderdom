import { IFeaturePolicy } from '../../base/interfaces/official';
import { IFeaturePolicyProperties } from '../../base/official-klasses/FeaturePolicy';
export declare const getState: <C = IFeaturePolicy, P = IFeaturePolicyProperties>(instance: C) => P, setState: <P = IFeaturePolicyProperties>(instance: IFeaturePolicy, properties: P) => void;
declare const FeaturePolicyBaseClass: {
    new (): {};
};
export default class FeaturePolicy extends FeaturePolicyBaseClass implements IFeaturePolicy {
}
export {};
