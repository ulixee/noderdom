import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMStringMap } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDOMStringMap, IDOMStringMapProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMStringMap>('DOMStringMap', getState, setState);

export function DOMStringMapGenerator() {
  return class DOMStringMap implements IDOMStringMap {
    constructor() {
      initializeConstantsAndProperties<DOMStringMap>(this, DOMStringMapConstantKeys, DOMStringMapPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMStringMapProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMStringMapPropertyKeys = [];

export const DOMStringMapConstantKeys = [];
