import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDOMImplementation } from '../interfaces/official';
export declare const getState: <C = IDOMImplementation, P = IDOMImplementationProperties>(instance: C) => P, setState: <P = IDOMImplementationProperties>(instance: IDOMImplementation, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IDOMImplementation>;
export declare function DOMImplementationGenerator(): {
    new (): {
        hasFeature(): Promise<boolean>;
    };
};
export interface IDOMImplementationProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const DOMImplementationPropertyKeys: never[];
export declare const DOMImplementationConstantKeys: never[];
