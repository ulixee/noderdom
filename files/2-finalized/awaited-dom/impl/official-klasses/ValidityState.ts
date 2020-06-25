import StateMachine from '../../base/StateMachine';
import { IValidityState } from '../../base/interfaces/official';
import { ValidityStateGenerator, IValidityStateProperties } from '../../base/official-klasses/ValidityState';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IValidityState, IValidityStateProperties>();
const ValidityStateBaseClass = ValidityStateGenerator();

export default class ValidityState extends ValidityStateBaseClass implements IValidityState {}
