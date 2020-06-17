import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMRectList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectList, IDOMRectListProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRectList>('DOMRectList', getState, setState);

export function DOMRectListGenerator() {
  return class DOMRectList implements IDOMRectList {
    constructor() {
      initializeConstantsAndProperties<DOMRectList>(this, DOMRectListConstantKeys, DOMRectListPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMRectListPropertyKeys = [];

export const DOMRectListConstantKeys = [];
