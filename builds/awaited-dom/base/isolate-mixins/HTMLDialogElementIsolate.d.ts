import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDialogElementIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IHTMLDialogElementIsolate) => IHTMLDialogElementIsolateProperties, setState: (instance: IHTMLDialogElementIsolate, properties: Partial<IHTMLDialogElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLDialogElementIsolate>;
export default class HTMLDialogElementIsolate implements IHTMLDialogElementIsolate {
    get open(): Promise<boolean>;
    get returnValue(): Promise<string>;
    close(returnValue?: string): Promise<void>;
    show(): Promise<void>;
    showModal(): Promise<void>;
}
export interface IHTMLDialogElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly open?: Promise<boolean>;
    readonly returnValue?: Promise<string>;
}
export declare const HTMLDialogElementIsolatePropertyKeys: string[];
export declare const HTMLDialogElementIsolateConstantKeys: never[];
