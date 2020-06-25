import { IValidityState } from '../../base/interfaces/official';
import { IValidityStateProperties } from '../../base/official-klasses/ValidityState';
export declare const getState: <C = IValidityState, P = IValidityStateProperties>(instance: C) => P, setState: <P = IValidityStateProperties>(instance: IValidityState, properties: P) => void;
declare const ValidityStateBaseClass: {
    new (): {};
};
export default class ValidityState extends ValidityStateBaseClass implements IValidityState {
}
export {};
