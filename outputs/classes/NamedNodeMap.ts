import InternalHandler from '../InternalHandler';
import { IAttr, INamedNodeMap } from '../interfaces';

export default class NamedNodeMap implements INamedNodeMap {
  protected readonly _: INamedNodeMapRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<INamedNodeMap, number>(this, 'length');
  }

  // methods

  public getNamedItem(qualifiedName: string): IAttr | null {
    return InternalHandler.run<INamedNodeMap, IAttr | null>(this, 'getNamedItem', [qualifiedName]);
  }

  public getNamedItemNS(namespace: string | null, localName: string): IAttr | null {
    return InternalHandler.run<INamedNodeMap, IAttr | null>(this, 'getNamedItemNS', [namespace, localName]);
  }

  public item(index: number): IAttr | null {
    return InternalHandler.run<INamedNodeMap, IAttr | null>(this, 'item', [index]);
  }

  public removeNamedItem(qualifiedName: string): IAttr {
    return InternalHandler.run<INamedNodeMap, IAttr>(this, 'removeNamedItem', [qualifiedName]);
  }

  public removeNamedItemNS(namespace: string | null, localName: string): IAttr {
    return InternalHandler.run<INamedNodeMap, IAttr>(this, 'removeNamedItemNS', [namespace, localName]);
  }

  public setNamedItem(attr: IAttr): IAttr | null {
    return InternalHandler.run<INamedNodeMap, IAttr | null>(this, 'setNamedItem', [attr]);
  }

  public setNamedItemNS(attr: IAttr): IAttr | null {
    return InternalHandler.run<INamedNodeMap, IAttr | null>(this, 'setNamedItemNS', [attr]);
  }

  [index: number]: IAttr;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpNamedNodeMapKeys: Set<string> = new Set([]);

export interface INamedNodeMapRps {
  readonly length?: number;
}

export function setNamedNodeMapRps(instance: INamedNodeMap, data: INamedNodeMapRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpNamedNodeMapKeys.has(key)) {
      throw new Error(`${key} is not a property of NamedNodeMap`);
    }
    properties[key] = value;
  });
}
