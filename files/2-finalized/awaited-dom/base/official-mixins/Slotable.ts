import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { ISlotable, IHTMLSlotElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISlotable, ISlotableProperties>();
export const awaitedHandler = new AwaitedHandler<ISlotable>('Slotable', getState, setState);

export default class Slotable implements ISlotable {
  public get assignedSlot(): IHTMLSlotElement {
    throw new Error('Slotable.assignedSlot getter not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISlotableProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly assignedSlot?: IHTMLSlotElement;
}

export const SlotablePropertyKeys = ['assignedSlot'];

export const SlotableConstantKeys = [];
