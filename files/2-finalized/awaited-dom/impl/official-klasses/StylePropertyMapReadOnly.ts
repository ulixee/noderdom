import StateMachine from '../../base/StateMachine';
import { IStylePropertyMapReadOnly } from '../../base/interfaces/official';
import { StylePropertyMapReadOnlyGenerator, IStylePropertyMapReadOnlyProperties } from '../../base/official-klasses/StylePropertyMapReadOnly';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IStylePropertyMapReadOnly, IStylePropertyMapReadOnlyProperties>();
const StylePropertyMapReadOnlyBaseClass = StylePropertyMapReadOnlyGenerator();

export default class StylePropertyMapReadOnly extends StylePropertyMapReadOnlyBaseClass implements IStylePropertyMapReadOnly {}
