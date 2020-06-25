import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IAttrIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';
export declare const getState: <C = IAttrIsolate, P = IAttrIsolateProperties>(instance: C) => P, setState: <P = IAttrIsolateProperties>(instance: IAttrIsolate, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IAttrIsolate>;
export default class AttrIsolate implements IAttrIsolate {
    get localName(): Promise<string>;
    get name(): Promise<string>;
    get namespaceURI(): Promise<string | null>;
    get ownerElement(): ISuperElement;
    get prefix(): Promise<string | null>;
    get specified(): Promise<boolean>;
    get value(): Promise<string>;
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
    readonly value?: Promise<string>;
}
export declare const AttrIsolatePropertyKeys: string[];
export declare const AttrIsolateConstantKeys: never[];
