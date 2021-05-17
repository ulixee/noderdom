import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ISlotable, IHTMLSlotElement } from '../interfaces/official';
export declare const getState: (instance: ISlotable) => ISlotableProperties, setState: (instance: ISlotable, properties: Partial<ISlotableProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ISlotable>;
export default class Slotable implements ISlotable {
    get assignedSlot(): IHTMLSlotElement;
}
export interface ISlotableProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly assignedSlot?: IHTMLSlotElement;
}
export declare const SlotablePropertyKeys: string[];
export declare const SlotableConstantKeys: never[];
