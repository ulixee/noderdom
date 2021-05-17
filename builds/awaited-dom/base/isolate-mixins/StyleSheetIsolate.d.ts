import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IStyleSheetIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IStyleSheetIsolate) => IStyleSheetIsolateProperties, setState: (instance: IStyleSheetIsolate, properties: Partial<IStyleSheetIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IStyleSheetIsolate>;
export default class StyleSheetIsolate implements IStyleSheetIsolate {
}
export interface IStyleSheetIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const StyleSheetIsolatePropertyKeys: never[];
export declare const StyleSheetIsolateConstantKeys: never[];
