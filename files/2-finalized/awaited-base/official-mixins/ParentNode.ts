import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import NodeAttacher from '../NodeAttacher';
import { IParentNode } from '../interfaces/official';
import { ISuperElement, ISuperNodeList } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IParentNode, IParentNodeProperties>();
export const awaitedHandler = new AwaitedHandler<IParentNode>('ParentNode', getState, setState);
export const nodeAttacher = new NodeAttacher<IParentNode>('createParentNode', getState, setState, awaitedHandler);

export default class ParentNode implements IParentNode, PromiseLike<IParentNode> {
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

  public querySelectorAll(selectors: string): ISuperNodeList {
    throw new Error('ParentNode.querySelectorAll not implemented');
  }

  public then<TResult1 = IParentNode, TResult2 = never>(onfulfilled?: ((value: IParentNode) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
    return nodeAttacher.attach(this).then(onfulfilled, onrejected);
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
