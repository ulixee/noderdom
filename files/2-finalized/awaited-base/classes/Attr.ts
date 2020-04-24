// tslint:disable:variable-name
import Constructable from '../Constructable';
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IAttr, INode, IElement } from '../interfaces/dom';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from '../classes/Node';

export const { getState, setState, setHiddenState, setReadonlyOfAttr } = StateMachine<
  IAttr,
  IAttrProperties,
  IAttrReadonlyProperties
>('Attr');

export const awaitedHandler = new AwaitedHandler<IAttr>('Attr', getState, setState);

export function AttrGenerator(Node: Constructable<INode>) {
  return class Attr extends Node implements IAttr {
    constructor() {
      super();
      initializeConstantsAndProperties<Attr>(Attr, this, AttrConstantKeys, AttrPropertyKeys);
    }

    // properties

    public get localName(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'localName', false);
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public get namespaceURI(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'namespaceURI', true);
    }

    public get ownerElement(): IElement {
      throw new Error('Attr.ownerElement getter not implemented');
    }

    public get prefix(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'prefix', true);
    }

    public get specified(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'specified', false);
    }

    public get value(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'value', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAttrReadonlyProperties extends INodeReadonlyProperties {
  readonly localName?: Promise<string>;
  readonly name?: Promise<string>;
  readonly namespaceURI?: Promise<string | null>;
  readonly ownerElement?: IElement;
  readonly prefix?: Promise<string | null>;
  readonly specified?: Promise<boolean>;
  readonly value?: Promise<string>;
}

export interface IAttrProperties extends IAttrReadonlyProperties, INodeProperties {}

export const AttrPropertyKeys = [...NodePropertyKeys, 'localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'];

export const AttrConstantKeys = [...NodeConstantKeys];
