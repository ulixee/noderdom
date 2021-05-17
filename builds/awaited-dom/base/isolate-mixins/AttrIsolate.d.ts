import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IAttrIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: IAttrIsolate) => IAttrIsolateProperties, setState: (instance: IAttrIsolate, properties: Partial<IAttrIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IAttrIsolate>;
export default class AttrIsolate implements IAttrIsolate {
    get localName(): Promise<string>;
    get name(): Promise<string>;
    get namespaceURI(): Promise<string | null>;
    get ownerElement(): ISuperElement;
    get prefix(): Promise<string | null>;
    get specified(): Promise<boolean>;
    get value(): Promise<string> | Promise<number>;
}
export interface IAttrIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly localName?: Promise<string>;
    readonly name?: Promise<string>;
    readonly namespaceURI?: Promise<string | null>;
    readonly ownerElement?: ISuperElement;
    readonly prefix?: Promise<string | null>;
    readonly specified?: Promise<boolean>;
    readonly value?: Promise<string> | Promise<number>;
}
export declare const AttrIsolatePropertyKeys: string[];
export declare const AttrIsolateConstantKeys: never[];
