import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IValidityState } from '../interfaces/official';
export declare const getState: (instance: IValidityState) => IValidityStateProperties, setState: (instance: IValidityState, properties: Partial<IValidityStateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IValidityState>;
export declare function ValidityStateGenerator(): {
    new (): {};
};
export interface IValidityStateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const ValidityStatePropertyKeys: never[];
export declare const ValidityStateConstantKeys: never[];
