import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDOMTokenList, IDOMTokenListProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMTokenList>('DOMTokenList', getState, setState);

export function DOMTokenListGenerator() {
  return class DOMTokenList implements IDOMTokenList {
    constructor() {
      initializeConstantsAndProperties<DOMTokenList>(this, DOMTokenListConstantKeys, DOMTokenListPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMTokenListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMTokenListPropertyKeys = [];

export const DOMTokenListConstantKeys = [];
