import { ISlotable, IHTMLSlotElement } from '../../base/interfaces/official';
import SlotableBase, { ISlotableProperties } from '../../base/official-mixins/Slotable';
export declare const getState: (instance: ISlotable) => ISlotableProperties, setState: (instance: ISlotable, properties: Partial<ISlotableProperties>) => void;
export default class Slotable extends SlotableBase implements ISlotable {
    get assignedSlot(): IHTMLSlotElement;
}
