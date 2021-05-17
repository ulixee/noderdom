import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ILinkStyle } from '../interfaces/official';
import { ISuperStyleSheet } from '../interfaces/super';
export declare const getState: (instance: ILinkStyle) => ILinkStyleProperties, setState: (instance: ILinkStyle, properties: Partial<ILinkStyleProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ILinkStyle>;
export default class LinkStyle implements ILinkStyle {
    get sheet(): ISuperStyleSheet;
}
export interface ILinkStyleProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly sheet?: ISuperStyleSheet;
}
export declare const LinkStylePropertyKeys: string[];
export declare const LinkStyleConstantKeys: never[];
