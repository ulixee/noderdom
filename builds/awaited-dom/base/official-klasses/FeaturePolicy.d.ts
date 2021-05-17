import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IFeaturePolicy } from '../interfaces/official';
export declare const getState: (instance: IFeaturePolicy) => IFeaturePolicyProperties, setState: (instance: IFeaturePolicy, properties: Partial<IFeaturePolicyProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IFeaturePolicy>;
export declare function FeaturePolicyGenerator(): {
    new (): {};
};
export interface IFeaturePolicyProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const FeaturePolicyPropertyKeys: never[];
export declare const FeaturePolicyConstantKeys: never[];
