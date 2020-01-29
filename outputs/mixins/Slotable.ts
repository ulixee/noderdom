import InternalHandler from '../InternalHandler';
import { IHTMLSlotElement, ISlotable } from '../interfaces';

export default class Slotable implements ISlotable {
  public get assignedSlot(): IHTMLSlotElement | null {
    return InternalHandler.get<ISlotable, IHTMLSlotElement | null>(this, 'assignedSlot');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISlotableProperties {
  assignedSlot?: IHTMLSlotElement | null;
}

export interface ISlotableReadonlyProperties {
  assignedSlot?: IHTMLSlotElement | null;
}
