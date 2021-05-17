import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableCellElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLTableCellElementIsolate) => IHTMLTableCellElementIsolateProperties, setState: (instance: IHTMLTableCellElementIsolate, properties: Partial<IHTMLTableCellElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTableCellElementIsolate>;
export default class HTMLTableCellElementIsolate implements IHTMLTableCellElementIsolate {
}
export interface IHTMLTableCellElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const HTMLTableCellElementIsolatePropertyKeys: never[];
export declare const HTMLTableCellElementIsolateConstantKeys: never[];
