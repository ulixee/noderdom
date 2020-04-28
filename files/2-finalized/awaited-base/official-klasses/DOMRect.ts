import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IDOMRect } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRect, IDOMRectProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRect>('DOMRect', getState, setState);

export function DOMRectGenerator() {
  return class DOMRect implements IDOMRect {
    constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
      initialize(DOMRect, this);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectProperties {}

export const DOMRectPropertyKeys = [];

export const DOMRectConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IDOMRect>, self: IDOMRect) {
  initializeConstantsAndProperties<IDOMRect>(Klass, self, DOMRectConstantKeys, DOMRectPropertyKeys);
}
