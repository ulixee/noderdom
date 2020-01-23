import InternalHandler from '../InternalHandler';
import { INode, INodeList } from '../interfaces';

export default class NodeList<T extends INode = INode> implements INodeList<T> {
  protected readonly _: INodeListRps = {};

  // properties

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

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpNodeListKeys: Set<string> = new Set([]);

export interface INodeListRps {
  readonly length?: number;
}

export function setNodeListRps(instance: INodeList<INode>, data: INodeListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpNodeListKeys.has(key)) {
      throw new Error(`${key} is not a property of NodeList`);
    }
    properties[key] = value;
  });
}
