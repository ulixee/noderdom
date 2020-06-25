import { IHTMLOrSVGElement } from '../../base/interfaces/official';
import HTMLOrSVGElementBase, { IHTMLOrSVGElementProperties } from '../../base/official-mixins/HTMLOrSVGElement';
export declare const getState: <C = IHTMLOrSVGElement, P = IHTMLOrSVGElementProperties>(instance: C) => P, setState: <P = IHTMLOrSVGElementProperties>(instance: IHTMLOrSVGElement, properties: P) => void;
export default class HTMLOrSVGElement extends HTMLOrSVGElementBase implements IHTMLOrSVGElement {
}
