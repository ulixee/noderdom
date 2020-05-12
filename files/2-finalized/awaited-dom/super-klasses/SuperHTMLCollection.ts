import StateMachine from '../../awaited-base/StateMachine';
import { ISuperHTMLCollection } from '../../awaited-base/interfaces/super';
import { SuperHTMLCollectionGenerator, ISuperHTMLCollectionProperties } from '../../awaited-base/super-klasses/SuperHTMLCollection';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
const SuperHTMLCollectionBase = SuperHTMLCollectionGenerator();

export default class SuperHTMLCollection extends SuperHTMLCollectionBase implements ISuperHTMLCollection {}
