import { IHTMLHyperlinkElementUtils } from '../../base/interfaces/official';
import HTMLHyperlinkElementUtilsBase, { IHTMLHyperlinkElementUtilsProperties } from '../../base/official-mixins/HTMLHyperlinkElementUtils';
export declare const getState: (instance: IHTMLHyperlinkElementUtils) => IHTMLHyperlinkElementUtilsProperties, setState: (instance: IHTMLHyperlinkElementUtils, properties: Partial<IHTMLHyperlinkElementUtilsProperties>) => void;
export default class HTMLHyperlinkElementUtils extends HTMLHyperlinkElementUtilsBase implements IHTMLHyperlinkElementUtils {
}
