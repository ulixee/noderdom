import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { IParentNode, IElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IParentNode, IParentNodeProperties>();
export const awaitedHandler = new AwaitedHandler<IParentNode>('ParentNode', getState, setState);

export default class ParentNode implements IParentNode {
  public get childElementCount(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'childElementCount', false);
  }

  public get firstElementChild(): IElement {
    throw new Error('ParentNode.firstElementChild getter not implemented');
  }

  public get lastElementChild(): IElement {
    throw new Error('ParentNode.lastElementChild getter not implemented');
  }

  // methods

  public querySelector(selectors: string): IElement {
    throw new Error('ParentNode.querySelector not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IParentNodeProperties {
  readonly childElementCount?: Promise<number>;
  readonly firstElementChild?: IElement;
  readonly lastElementChild?: IElement;
}

export const ParentNodePropertyKeys = ['childElementCount', 'firstElementChild', 'lastElementChild'];

export const ParentNodeConstantKeys = [];
