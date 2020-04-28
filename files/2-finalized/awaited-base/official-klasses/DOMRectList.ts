import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IDOMRectList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectList, IDOMRectListProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRectList>('DOMRectList', getState, setState);

export function DOMRectListGenerator() {
  return class DOMRectList implements IDOMRectList {
    constructor() {
      initialize(DOMRectList, this);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectListProperties {}

export const DOMRectListPropertyKeys = [];

export const DOMRectListConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IDOMRectList>, self: IDOMRectList) {
  initializeConstantsAndProperties<IDOMRectList>(Klass, self, DOMRectListConstantKeys, DOMRectListPropertyKeys);
}
