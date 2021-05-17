import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ICaretPosition, IDOMRect } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
export declare const getState: (instance: ICaretPosition) => ICaretPositionProperties, setState: (instance: ICaretPosition, properties: Partial<ICaretPositionProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ICaretPosition>;
export declare function CaretPositionGenerator(): {
    new (): {
        readonly offset: Promise<number>;
        readonly offsetNode: ISuperNode;
        getClientRect(): IDOMRect;
    };
};
export interface ICaretPositionProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly offset?: Promise<number>;
    readonly offsetNode?: ISuperNode;
}
export declare const CaretPositionPropertyKeys: string[];
export declare const CaretPositionConstantKeys: never[];
