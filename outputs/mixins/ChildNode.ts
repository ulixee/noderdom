import InternalHandler from '../InternalHandler';
import { INode, IChildNode } from '../interfaces';

export default class ChildNode implements IChildNode {
  public after(...nodes: (INode | string)[]): void {
    InternalHandler.run<IChildNode, void>(this, 'after', [nodes]);
  }

  public before(...nodes: (INode | string)[]): void {
    InternalHandler.run<IChildNode, void>(this, 'before', [nodes]);
  }

  public remove(): void {
    InternalHandler.run<IChildNode, void>(this, 'remove', []);
  }

  public replaceWith(...nodes: (INode | string)[]): void {
    InternalHandler.run<IChildNode, void>(this, 'replaceWith', [nodes]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IChildNodeProperties {}

export interface IChildNodeReadonlyProperties {}
