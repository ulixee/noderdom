import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHyperlinkElementUtils } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: IHTMLHyperlinkElementUtils) => IHTMLHyperlinkElementUtilsProperties, setState: (instance: IHTMLHyperlinkElementUtils, properties: Partial<IHTMLHyperlinkElementUtilsProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLHyperlinkElementUtils>;
export default class HTMLHyperlinkElementUtils implements IHTMLHyperlinkElementUtils {
    get hash(): Promise<string>;
    get host(): Promise<string> | ISuperElement;
    get hostname(): Promise<string>;
    get href(): Promise<string>;
    get origin(): Promise<string>;
    get password(): Promise<string>;
    get pathname(): Promise<string>;
    get port(): Promise<string>;
    get protocol(): Promise<string>;
    get search(): Promise<string>;
    get username(): Promise<string>;
    toString(): Promise<string>;
}
export interface IHTMLHyperlinkElementUtilsProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly hash?: Promise<string>;
    readonly host?: Promise<string> | ISuperElement;
    readonly hostname?: Promise<string>;
    readonly href?: Promise<string>;
    readonly origin?: Promise<string>;
    readonly password?: Promise<string>;
    readonly pathname?: Promise<string>;
    readonly port?: Promise<string>;
    readonly protocol?: Promise<string>;
    readonly search?: Promise<string>;
    readonly username?: Promise<string>;
}
export declare const HTMLHyperlinkElementUtilsPropertyKeys: string[];
export declare const HTMLHyperlinkElementUtilsConstantKeys: never[];
