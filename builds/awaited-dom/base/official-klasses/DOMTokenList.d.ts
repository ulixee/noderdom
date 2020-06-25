import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDOMTokenList } from '../interfaces/official';
export declare const getState: <C = IDOMTokenList, P = IDOMTokenListProperties>(instance: C) => P, setState: <P = IDOMTokenListProperties>(instance: IDOMTokenList, properties: P) => void;
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
