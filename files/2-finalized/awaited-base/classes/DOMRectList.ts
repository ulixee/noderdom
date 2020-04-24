// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IDOMRectList } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfDOMRectList } = StateMachine<
  IDOMRectList,
  IDOMRectListProperties,
  IDOMRectListReadonlyProperties
>('DOMRectList');

export const awaitedHandler = new AwaitedHandler<IDOMRectList>('DOMRectList', getState, setState);

export default class DOMRectList implements IDOMRectList {
  constructor() {
    initializeConstantsAndProperties<DOMRectList>(DOMRectList, this, DOMRectListConstantKeys, DOMRectListPropertyKeys);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectListReadonlyProperties {}

export interface IDOMRectListProperties extends IDOMRectListReadonlyProperties {}

export const DOMRectListPropertyKeys = [];

export const DOMRectListConstantKeys = [];
