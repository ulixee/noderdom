import StateMachine from '../../base/StateMachine';
import { IHTMLOrSVGElement, IDOMStringMap } from '../../base/interfaces/official';
import HTMLOrSVGElementBase, { IHTMLOrSVGElementProperties } from '../../base/official-mixins/HTMLOrSVGElement';
import { createDOMStringMap } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLOrSVGElement, IHTMLOrSVGElementProperties>();

export default class HTMLOrSVGElement extends HTMLOrSVGElementBase implements IHTMLOrSVGElement {
  public get dataset(): IDOMStringMap {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMStringMap(awaitedPath.addProperty('dataset'), awaitedOptions);
  }
}
