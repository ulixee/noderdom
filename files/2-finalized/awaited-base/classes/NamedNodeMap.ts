// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { INamedNodeMap, IAttr } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfNamedNodeMap } = StateMachine<
  INamedNodeMap,
  INamedNodeMapProperties,
  INamedNodeMapReadonlyProperties
>('NamedNodeMap');

export const awaitedHandler = new AwaitedHandler<INamedNodeMap>('NamedNodeMap', getState, setState);

export default class NamedNodeMap implements INamedNodeMap {
  constructor() {
    initializeConstantsAndProperties<NamedNodeMap>(NamedNodeMap, this, NamedNodeMapConstantKeys, NamedNodeMapPropertyKeys);
  }

  // properties

  public get length(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'length', false);
  }

  // methods

  public getNamedItem(qualifiedName: string): IAttr {
    throw new Error('NamedNodeMap.getNamedItem not implemented');
  }

  public getNamedItemNS(namespace: string | null, localName: string): IAttr {
    throw new Error('NamedNodeMap.getNamedItemNS not implemented');
  }

  public item(index: number): IAttr {
    throw new Error('NamedNodeMap.item not implemented');
  }

  public [Symbol.iterator](): IterableIterator<IAttr> {
    return awaitedHandler.runMethod<IterableIterator<IAttr>>(this, '[Symbol.iterator]', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INamedNodeMapReadonlyProperties {
  readonly length?: Promise<number>;
}

export interface INamedNodeMapProperties extends INamedNodeMapReadonlyProperties {}

export const NamedNodeMapPropertyKeys = ['length'];

export const NamedNodeMapConstantKeys = [];
