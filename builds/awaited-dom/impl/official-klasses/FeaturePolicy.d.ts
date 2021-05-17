import { IFeaturePolicy } from '../../base/interfaces/official';
import { IFeaturePolicyProperties } from '../../base/official-klasses/FeaturePolicy';
export declare const getState: (instance: IFeaturePolicy) => IFeaturePolicyProperties, setState: (instance: IFeaturePolicy, properties: Partial<IFeaturePolicyProperties>) => void;
declare const FeaturePolicyBaseClass: {
    new (): {};
};
export default class FeaturePolicy extends FeaturePolicyBaseClass implements IFeaturePolicy {
}
export {};
