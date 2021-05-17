import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IStyleSheet } from '../interfaces/official';
export declare const getState: (instance: IStyleSheet) => IStyleSheetProperties, setState: (instance: IStyleSheet, properties: Partial<IStyleSheetProperties>) => void;
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
