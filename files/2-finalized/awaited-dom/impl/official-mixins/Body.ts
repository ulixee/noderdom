import StateMachine from '../../base/StateMachine';
import { IBody } from '../../base/interfaces/official';
import BodyBase, { IBodyProperties } from '../../base/official-mixins/Body';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IBody, IBodyProperties>();

export default class Body extends BodyBase implements IBody {}
