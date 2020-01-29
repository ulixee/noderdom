import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, INodeList } from '../interfaces';

export default class NodeList<T extends INode = INode> implements INodeList<T> {
  public get length(): number {
    return InternalHandler.get<INodeList<T>, number>(this, 'length');
  }

  // methods

  public item(index: number): T | null {
    return InternalHandler.run<INodeList<T>, T | null>(this, 'item', [index]);
  }

  public forEach(callbackfn: (value: INode, key: number, parent: INodeList<T>) => void, thisArg?: any): void {
    InternalHandler.run<INodeList<T>, void>(this, 'forEach', [callbackfn, thisArg]);
  }

  [index: number]: T;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface INodeListProperties {
  length?: number;
}

export interface INodeListReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfNodeList } = InternalStateGenerator<
  INodeList,
  INodeListProperties,
  INodeListReadonlyProperties
>('NodeList');
