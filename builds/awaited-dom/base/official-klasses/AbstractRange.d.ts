import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IAbstractRange } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
export declare const getState: (instance: IAbstractRange) => IAbstractRangeProperties, setState: (instance: IAbstractRange, properties: Partial<IAbstractRangeProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IAbstractRange>;
export declare function AbstractRangeGenerator(): {
    new (): {
        readonly collapsed: Promise<boolean>;
        readonly endContainer: ISuperNode;
        readonly endOffset: Promise<number>;
        readonly startContainer: ISuperNode;
        readonly startOffset: Promise<number>;
    };
};
export interface IAbstractRangeProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly collapsed?: Promise<boolean>;
    readonly endContainer?: ISuperNode;
    readonly endOffset?: Promise<number>;
    readonly startContainer?: ISuperNode;
    readonly startOffset?: Promise<number>;
}
export declare const AbstractRangePropertyKeys: string[];
export declare const AbstractRangeConstantKeys: never[];
