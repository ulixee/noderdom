import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLOrSVGElement } from '../../awaited-base/interfaces/official';
import HTMLOrSVGElementBase, { IHTMLOrSVGElementProperties } from '../../awaited-base/official-mixins/HTMLOrSVGElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOrSVGElement, IHTMLOrSVGElementProperties>();

export default class HTMLOrSVGElement extends HTMLOrSVGElementBase implements IHTMLOrSVGElement, PromiseLike<IHTMLOrSVGElement> {}
