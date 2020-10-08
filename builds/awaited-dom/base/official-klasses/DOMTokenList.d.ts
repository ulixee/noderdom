import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDOMTokenList } from '../interfaces/official';
export declare const getState: (instance: IDOMTokenList) => IDOMTokenListProperties, setState: (instance: IDOMTokenList, properties: Partial<IDOMTokenListProperties>) => void, recordProxy: (proxy: IDOMTokenList, instance: IDOMTokenList) => void;
export declare const awaitedHandler: AwaitedHandler<IDOMTokenList>;
export declare function DOMTokenListGenerator(): {
    new (): {};
};
export interface IDOMTokenListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const DOMTokenListPropertyKeys: never[];
export declare const DOMTokenListConstantKeys: never[];
