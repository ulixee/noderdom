import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, INodeFilter, ITreeWalker } from '../interfaces';

export default class TreeWalker implements ITreeWalker {
  public get currentNode(): INode {
    return InternalHandler.get<ITreeWalker, INode>(this, 'currentNode');
  }

  public set currentNode(value: INode) {
    InternalHandler.set<ITreeWalker, INode>(this, 'currentNode', value);
  }

  public get filter(): INodeFilter | null {
    return InternalHandler.get<ITreeWalker, INodeFilter | null>(this, 'filter');
  }

  public get root(): INode {
    return InternalHandler.get<ITreeWalker, INode>(this, 'root');
  }

  public get whatToShow(): number {
    return InternalHandler.get<ITreeWalker, number>(this, 'whatToShow');
  }

  // methods

  public firstChild(): INode | null {
    return InternalHandler.run<ITreeWalker, INode | null>(this, 'firstChild', []);
  }

  public lastChild(): INode | null {
    return InternalHandler.run<ITreeWalker, INode | null>(this, 'lastChild', []);
  }

  public nextNode(): INode | null {
    return InternalHandler.run<ITreeWalker, INode | null>(this, 'nextNode', []);
  }

  public nextSibling(): INode | null {
    return InternalHandler.run<ITreeWalker, INode | null>(this, 'nextSibling', []);
  }

  public parentNode(): INode | null {
    return InternalHandler.run<ITreeWalker, INode | null>(this, 'parentNode', []);
  }

  public previousNode(): INode | null {
    return InternalHandler.run<ITreeWalker, INode | null>(this, 'previousNode', []);
  }

  public previousSibling(): INode | null {
    return InternalHandler.run<ITreeWalker, INode | null>(this, 'previousSibling', []);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ITreeWalkerProperties {
  currentNode?: INode;
  filter?: INodeFilter | null;
  root?: INode;
  whatToShow?: number;
}

export interface ITreeWalkerReadonlyProperties {
  filter?: INodeFilter | null;
  root?: INode;
  whatToShow?: number;
}

export const { getState, setState, setReadonlyOfTreeWalker } = InternalStateGenerator<
  ITreeWalker,
  ITreeWalkerProperties,
  ITreeWalkerReadonlyProperties
>('TreeWalker');
