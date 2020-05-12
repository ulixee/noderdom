import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IParentNode } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IParentNode, IParentNodeProperties>();
export const awaitedHandler = new AwaitedHandler<IParentNode>('ParentNode', getState, setState);

export default class ParentNode implements IParentNode {
  public get childElementCount(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'childElementCount', false);
  }

  public get firstElementChild(): ISuperElement {
    throw new Error('ParentNode.firstElementChild getter not implemented');
  }

  public get lastElementChild(): ISuperElement {
    throw new Error('ParentNode.lastElementChild getter not implemented');
  }

  // methods

  public querySelector(selectors: string): ISuperElement {
    throw new Error('ParentNode.querySelector not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IParentNodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly childElementCount?: Promise<number>;
  readonly firstElementChild?: ISuperElement;
  readonly lastElementChild?: ISuperElement;
}

export const ParentNodePropertyKeys = ['childElementCount', 'firstElementChild', 'lastElementChild'];

export const ParentNodeConstantKeys = [];
