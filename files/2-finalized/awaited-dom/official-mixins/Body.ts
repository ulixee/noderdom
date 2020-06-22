import StateMachine from '../../awaited-base/StateMachine';
import { IBody } from '../../awaited-base/interfaces/official';
import BodyBase, { IBodyProperties } from '../../awaited-base/official-mixins/Body';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IBody, IBodyProperties>();

export default class Body extends BodyBase implements IBody {}
