import InternalHandler from '../InternalHandler';
import { IHTMLCollection, IElement, INode, INodeList, IParentNode } from '../interfaces';

export default class ParentNode implements IParentNode {
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

  public querySelector(selectors: string): IElement | null {
    return InternalHandler.run<IParentNode, IElement | null>(this, 'querySelector', [selectors]);
  }

  public querySelectorAll(selectors: string): INodeList {
    return InternalHandler.run<IParentNode, INodeList>(this, 'querySelectorAll', [selectors]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IParentNodeProperties {
  childElementCount?: number;
  children?: IHTMLCollection;
  firstElementChild?: IElement | null;
  lastElementChild?: IElement | null;
}

export interface IParentNodeReadonlyProperties {
  childElementCount?: number;
  children?: IHTMLCollection;
  firstElementChild?: IElement | null;
  lastElementChild?: IElement | null;
}
