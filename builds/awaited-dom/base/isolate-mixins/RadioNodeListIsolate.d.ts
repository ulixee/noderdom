import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IRadioNodeListIsolate } from '../interfaces/isolate';
import { ISuperNode } from '../interfaces/super';
export declare const getState: (instance: IRadioNodeListIsolate) => IRadioNodeListIsolateProperties, setState: (instance: IRadioNodeListIsolate, properties: Partial<IRadioNodeListIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IRadioNodeListIsolate>;
export default class RadioNodeListIsolate implements IRadioNodeListIsolate {
    get value(): Promise<string>;
    [index: number]: ISuperNode;
}
export interface IRadioNodeListIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly value?: Promise<string>;
}
export declare const RadioNodeListIsolatePropertyKeys: string[];
export declare const RadioNodeListIsolateConstantKeys: never[];
