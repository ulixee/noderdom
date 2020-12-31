import { IHTMLOrSVGElement, IDOMStringMap } from '../../base/interfaces/official';
import HTMLOrSVGElementBase, { IHTMLOrSVGElementProperties } from '../../base/official-mixins/HTMLOrSVGElement';
export declare const getState: (instance: IHTMLOrSVGElement) => IHTMLOrSVGElementProperties, setState: (instance: IHTMLOrSVGElement, properties: Partial<IHTMLOrSVGElementProperties>) => void, recordProxy: (proxy: IHTMLOrSVGElement, instance: IHTMLOrSVGElement) => void;
export default class HTMLOrSVGElement extends HTMLOrSVGElementBase implements IHTMLOrSVGElement {
    get dataset(): IDOMStringMap;
}
