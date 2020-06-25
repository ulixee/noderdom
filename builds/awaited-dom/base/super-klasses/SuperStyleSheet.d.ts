import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ISuperStyleSheet } from '../interfaces/super';
export declare const getState: <C = ISuperStyleSheet, P = ISuperStyleSheetProperties>(instance: C) => P, setState: <P = ISuperStyleSheetProperties>(instance: ISuperStyleSheet, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<ISuperStyleSheet>;
export declare function SuperStyleSheetGenerator(): {
    new (): {};
};
export interface ISuperStyleSheetProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const SuperStyleSheetPropertyKeys: never[];
export declare const SuperStyleSheetConstantKeys: never[];
