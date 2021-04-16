import StateMachine from '../../base/StateMachine';
import { IHTMLOrSVGElement } from '../../base/interfaces/official';
import HTMLOrSVGElementBase, { IHTMLOrSVGElementProperties } from '../../base/official-mixins/HTMLOrSVGElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLOrSVGElement, IHTMLOrSVGElementProperties>();

export default class HTMLOrSVGElement extends HTMLOrSVGElementBase implements IHTMLOrSVGElement {}
