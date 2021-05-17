import { IAbstractRange } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { IAbstractRangeProperties } from '../../base/official-klasses/AbstractRange';
export declare const getState: (instance: IAbstractRange) => IAbstractRangeProperties, setState: (instance: IAbstractRange, properties: Partial<IAbstractRangeProperties>) => void;
declare const AbstractRangeBaseClass: {
    new (): {
        readonly collapsed: Promise<boolean>;
        readonly endContainer: ISuperNode;
        readonly endOffset: Promise<number>;
        readonly startContainer: ISuperNode;
        readonly startOffset: Promise<number>;
    };
};
export default class AbstractRange extends AbstractRangeBaseClass implements IAbstractRange {
    get endContainer(): ISuperNode;
    get startContainer(): ISuperNode;
}
export {};
