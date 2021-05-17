import { ICaretPosition, IDOMRect } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { ICaretPositionProperties } from '../../base/official-klasses/CaretPosition';
export declare const getState: (instance: ICaretPosition) => ICaretPositionProperties, setState: (instance: ICaretPosition, properties: Partial<ICaretPositionProperties>) => void;
declare const CaretPositionBaseClass: {
    new (): {
        readonly offset: Promise<number>;
        readonly offsetNode: ISuperNode;
        getClientRect(): IDOMRect;
    };
};
export default class CaretPosition extends CaretPositionBaseClass implements ICaretPosition {
    get offsetNode(): ISuperNode;
    getClientRect(): IDOMRect;
}
export {};
