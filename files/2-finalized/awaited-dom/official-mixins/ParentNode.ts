import StateMachine from '../../awaited-base/StateMachine';
import { IParentNode } from '../../awaited-base/interfaces/official';
import { ISuperElement, ISuperNodeList } from '../../awaited-base/interfaces/super';
import ParentNodeBase, { IParentNodeProperties } from '../../awaited-base/official-mixins/ParentNode';
import { createSuperElement, createSuperNodeList } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IParentNode, IParentNodeProperties>();

export default class ParentNode extends ParentNodeBase implements IParentNode, PromiseLike<IParentNode> {
  public get firstElementChild(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('firstElementChild'), awaitedOptions);
  }

  public get lastElementChild(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('lastElementChild'), awaitedOptions);
  }

  // methods

  public querySelector(selectors: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('querySelector', selectors), awaitedOptions);
  }

  public querySelectorAll(selectors: string): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addMethod('querySelectorAll', selectors), awaitedOptions);
  }
}
