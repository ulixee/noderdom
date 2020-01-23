import InternalHandler from '../InternalHandler';
import { IElement, IAttr } from '../interfaces';
import Node, { INodeRps, rpNodeKeys } from './Node';

export default class Attr extends Node implements IAttr {
  protected readonly _: IAttrRps = {};

  // properties

  public get localName(): string {
    return InternalHandler.get<IAttr, string>(this, 'localName');
  }

  public get name(): string {
    return InternalHandler.get<IAttr, string>(this, 'name');
  }

  public get namespaceURI(): string | null {
    return InternalHandler.get<IAttr, string | null>(this, 'namespaceURI');
  }

  public get ownerElement(): IElement | null {
    return InternalHandler.get<IAttr, IElement | null>(this, 'ownerElement');
  }

  public get prefix(): string | null {
    return InternalHandler.get<IAttr, string | null>(this, 'prefix');
  }

  public get specified(): boolean {
    return InternalHandler.get<IAttr, boolean>(this, 'specified');
  }

  public get value(): string {
    return InternalHandler.get<IAttr, string>(this, 'value');
  }

  public set value(value: string) {
    InternalHandler.set<IAttr, string>(this, 'value', value);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpAttrKeys: Set<string> = new Set([...rpNodeKeys]);

export interface IAttrRps extends INodeRps {
  readonly localName?: string;
  readonly name?: string;
  readonly namespaceURI?: string | null;
  readonly ownerElement?: IElement | null;
  readonly prefix?: string | null;
  readonly specified?: boolean;
}

export function setAttrRps(instance: IAttr, data: IAttrRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpAttrKeys.has(key)) {
      throw new Error(`${key} is not a property of Attr`);
    }
    properties[key] = value;
  });
}
