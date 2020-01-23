import InternalHandler from '../InternalHandler';
import { IHTMLSlotElement, ISlotable } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Slotable<TBase extends Constructor>(base: TBase) {
  return class extends base implements ISlotable {
    public get assignedSlot(): IHTMLSlotElement | null {
      return InternalHandler.get<ISlotable, IHTMLSlotElement | null>(this, 'assignedSlot');
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSlotableKeys: Set<string> = new Set([]);

export interface ISlotableRps {
  readonly assignedSlot?: IHTMLSlotElement | null;
}
