import StateMachine from '../../base/StateMachine';
import { ICaretPosition } from '../../base/interfaces/official';
import { CaretPositionGenerator, ICaretPositionProperties } from '../../base/official-klasses/CaretPosition';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICaretPosition, ICaretPositionProperties>();
const CaretPositionBaseClass = CaretPositionGenerator();

export default class CaretPosition extends CaretPositionBaseClass implements ICaretPosition {}
