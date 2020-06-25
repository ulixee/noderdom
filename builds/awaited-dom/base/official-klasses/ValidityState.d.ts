import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IValidityState } from '../interfaces/official';
export declare const getState: <C = IValidityState, P = IValidityStateProperties>(instance: C) => P, setState: <P = IValidityStateProperties>(instance: IValidityState, properties: P) => void;
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
