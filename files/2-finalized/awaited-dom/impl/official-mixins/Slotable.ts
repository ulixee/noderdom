import StateMachine from '../../base/StateMachine';
import { ISlotable, IHTMLSlotElement } from '../../base/interfaces/official';
import SlotableBase, { ISlotableProperties } from '../../base/official-mixins/Slotable';
import { createHTMLSlotElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISlotable, ISlotableProperties>();

export default class Slotable extends SlotableBase implements ISlotable {
  public get assignedSlot(): IHTMLSlotElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLSlotElement(awaitedPath.addProperty(this, 'assignedSlot'), awaitedOptions);
  }
}
