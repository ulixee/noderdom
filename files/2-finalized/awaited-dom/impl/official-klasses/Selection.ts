import StateMachine from '../../base/StateMachine';
import { ISelection } from '../../base/interfaces/official';
import { SelectionGenerator, ISelectionProperties } from '../../base/official-klasses/Selection';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISelection, ISelectionProperties>();
const SelectionBaseClass = SelectionGenerator();

export default class Selection extends SelectionBaseClass implements ISelection {}
