import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, INodeFilter, INodeIterator } from '../interfaces';

export default class NodeIterator implements INodeIterator {
  public get filter(): INodeFilter | null {
    return InternalHandler.get<INodeIterator, INodeFilter | null>(this, 'filter');
  }

  public get pointerBeforeReferenceNode(): boolean {
    return InternalHandler.get<INodeIterator, boolean>(this, 'pointerBeforeReferenceNode');
  }

  public get referenceNode(): INode {
    return InternalHandler.get<INodeIterator, INode>(this, 'referenceNode');
  }

  public get root(): INode {
    return InternalHandler.get<INodeIterator, INode>(this, 'root');
  }

  public get whatToShow(): number {
    return InternalHandler.get<INodeIterator, number>(this, 'whatToShow');
  }

  // methods

  public detach(): void {
    InternalHandler.run<INodeIterator, void>(this, 'detach', []);
  }

  public nextNode(): INode | null {
    return InternalHandler.run<INodeIterator, INode | null>(this, 'nextNode', []);
  }

  public previousNode(): INode | null {
    return InternalHandler.run<INodeIterator, INode | null>(this, 'previousNode', []);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface INodeIteratorProperties {
  filter?: INodeFilter | null;
  pointerBeforeReferenceNode?: boolean;
  referenceNode?: INode;
  root?: INode;
  whatToShow?: number;
}

export interface INodeIteratorReadonlyProperties {
  filter?: INodeFilter | null;
  pointerBeforeReferenceNode?: boolean;
  referenceNode?: INode;
  root?: INode;
  whatToShow?: number;
}

export const { getState, setState, setReadonlyOfNodeIterator } = InternalStateGenerator<
  INodeIterator,
  INodeIteratorProperties,
  INodeIteratorReadonlyProperties
>('NodeIterator');
