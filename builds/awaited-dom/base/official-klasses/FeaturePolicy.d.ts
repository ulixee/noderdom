import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IFeaturePolicy } from '../interfaces/official';
export declare const getState: <C = IFeaturePolicy, P = IFeaturePolicyProperties>(instance: C) => P, setState: <P = IFeaturePolicyProperties>(instance: IFeaturePolicy, properties: P) => void;
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
