import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMTokenList, IDOMTokenListProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMTokenList>('DOMTokenList', getState, setState);

export function DOMTokenListGenerator() {
  return class DOMTokenList implements IDOMTokenList {
    constructor() {
      initialize(DOMTokenList, this);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMTokenListProperties {}

export const DOMTokenListPropertyKeys = [];

export const DOMTokenListConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IDOMTokenList>, self: IDOMTokenList) {
  initializeConstantsAndProperties<IDOMTokenList>(Klass, self, DOMTokenListConstantKeys, DOMTokenListPropertyKeys);
}
