import StateMachine from '../../awaited-base/StateMachine';
import { IParentNode, IElement } from '../../awaited-base/interfaces/official';
import ParentNodeBase, { IParentNodeProperties } from '../../awaited-base/official-mixins/ParentNode';
import { createElement } from '../official-klasses/Element';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IParentNode, IParentNodeProperties>();

export default class ParentNode extends ParentNodeBase implements IParentNode {
  public get firstElementChild(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('firstElementChild'), awaitedOptions);
  }

  public get lastElementChild(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('lastElementChild'), awaitedOptions);
  }

  // methods

  public querySelector(selectors: string): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addMethod('querySelector', selectors), awaitedOptions);
  }
}
