import InternalHandler from '../InternalHandler';
import {
  IHTMLElementTagNameMap,
  ISVGElementTagNameMap,
  IElement,
  INodeList,
  IHTMLCollection,
  INode,
  IParentNode,
} from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ParentNode<TBase extends Constructor>(base: TBase) {
  return class extends base implements IParentNode {
    public get childElementCount(): number {
      return InternalHandler.get<IParentNode, number>(this, 'childElementCount');
    }

    public get children(): IHTMLCollection {
      return InternalHandler.get<IParentNode, IHTMLCollection>(this, 'children');
    }

    public get firstElementChild(): IElement | null {
      return InternalHandler.get<IParentNode, IElement | null>(this, 'firstElementChild');
    }

    public get lastElementChild(): IElement | null {
      return InternalHandler.get<IParentNode, IElement | null>(this, 'lastElementChild');
    }

    // methods

    public append(...nodes: (INode | string)[]): void {
      InternalHandler.run<IParentNode, void>(this, 'append', [nodes]);
    }

    public prepend(...nodes: (INode | string)[]): void {
      InternalHandler.run<IParentNode, void>(this, 'prepend', [nodes]);
    }

    public querySelector<K extends keyof IHTMLElementTagNameMap>(selectors: K): IHTMLElementTagNameMap[K] | null;
    public querySelector<K extends keyof ISVGElementTagNameMap>(selectors: K): ISVGElementTagNameMap[K] | null;
    public querySelector<E extends IElement = IElement>(selectors: string): E | null {
      return InternalHandler.run<IParentNode, E | null>(this, 'querySelector', [selectors]);
    }

    public querySelectorAll<K extends keyof IHTMLElementTagNameMap>(selectors: K): INodeList<IHTMLElementTagNameMap[K]>;
    public querySelectorAll<K extends keyof ISVGElementTagNameMap>(selectors: K): INodeList<ISVGElementTagNameMap[K]>;
    public querySelectorAll<E extends IElement = IElement>(selectors: string): INodeList<E> {
      return InternalHandler.run<IParentNode, INodeList<E>>(this, 'querySelectorAll', [selectors]);
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpParentNodeKeys: Set<string> = new Set([]);

export interface IParentNodeRps {
  readonly childElementCount?: number;
  readonly children?: IHTMLCollection;
  readonly firstElementChild?: IElement | null;
  readonly lastElementChild?: IElement | null;
}
