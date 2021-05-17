import { ILinkStyle } from '../../base/interfaces/official';
import { ISuperStyleSheet } from '../../base/interfaces/super';
import LinkStyleBase, { ILinkStyleProperties } from '../../base/official-mixins/LinkStyle';
export declare const getState: (instance: ILinkStyle) => ILinkStyleProperties, setState: (instance: ILinkStyle, properties: Partial<ILinkStyleProperties>) => void;
export default class LinkStyle extends LinkStyleBase implements ILinkStyle {
    get sheet(): ISuperStyleSheet;
}
