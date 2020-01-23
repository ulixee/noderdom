import InternalHandler from '../InternalHandler';
import { INode, IChildNode } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ChildNode<TBase extends Constructor>(base: TBase) {
  return class extends base implements IChildNode {
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
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpChildNodeKeys: Set<string> = new Set([]);

export interface IChildNodeRps {}
