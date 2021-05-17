import { IValidityState } from '../../base/interfaces/official';
import { IValidityStateProperties } from '../../base/official-klasses/ValidityState';
export declare const getState: (instance: IValidityState) => IValidityStateProperties, setState: (instance: IValidityState, properties: Partial<IValidityStateProperties>) => void;
declare const ValidityStateBaseClass: {
    new (): {};
};
export default class ValidityState extends ValidityStateBaseClass implements IValidityState {
}
export {};
