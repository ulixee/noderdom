import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IAttr, INamedNodeMap } from '../interfaces';

export default class NamedNodeMap implements INamedNodeMap {
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

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface INamedNodeMapProperties {
  length?: number;
}

export interface INamedNodeMapReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfNamedNodeMap } = InternalStateGenerator<
  INamedNodeMap,
  INamedNodeMapProperties,
  INamedNodeMapReadonlyProperties
>('NamedNodeMap');
