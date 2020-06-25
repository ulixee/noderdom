import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IStyleSheet } from '../interfaces/official';
export declare const getState: <C = IStyleSheet, P = IStyleSheetProperties>(instance: C) => P, setState: <P = IStyleSheetProperties>(instance: IStyleSheet, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IStyleSheet>;
export declare function StyleSheetGenerator(): {
    new (): {};
};
export interface IStyleSheetProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const StyleSheetPropertyKeys: never[];
export declare const StyleSheetConstantKeys: never[];
