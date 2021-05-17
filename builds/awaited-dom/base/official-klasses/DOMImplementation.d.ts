import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDOMImplementation } from '../interfaces/official';
export declare const getState: (instance: IDOMImplementation) => IDOMImplementationProperties, setState: (instance: IDOMImplementation, properties: Partial<IDOMImplementationProperties>) => void;
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
