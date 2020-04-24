// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IDOMRect } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfDOMRect } = StateMachine<
  IDOMRect,
  IDOMRectProperties,
  IDOMRectReadonlyProperties
>('DOMRect');

export const awaitedHandler = new AwaitedHandler<IDOMRect>('DOMRect', getState, setState);

export default class DOMRect implements IDOMRect {
  constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
    initializeConstantsAndProperties<DOMRect>(DOMRect, this, DOMRectConstantKeys, DOMRectPropertyKeys);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectReadonlyProperties {}

export interface IDOMRectProperties extends IDOMRectReadonlyProperties {}

export const DOMRectPropertyKeys = [];

export const DOMRectConstantKeys = [];
