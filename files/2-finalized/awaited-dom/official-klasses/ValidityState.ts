import StateMachine from '../../awaited-base/StateMachine';
import { IValidityState } from '../../awaited-base/interfaces/official';
import { ValidityStateGenerator, IValidityStateProperties } from '../../awaited-base/official-klasses/ValidityState';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IValidityState, IValidityStateProperties>();
const ValidityStateBaseClass = ValidityStateGenerator();

export default class ValidityState extends ValidityStateBaseClass implements IValidityState {}
