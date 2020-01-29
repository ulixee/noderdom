import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, IElement, IAttr } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties } from './Node';

// tslint:disable-next-line:variable-name
export function AttrGenerator(Node: Constructable<INode>) {
  return class Attr extends Node implements IAttr {
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
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IAttrProperties extends INodeProperties {
  localName?: string;
  name?: string;
  namespaceURI?: string | null;
  ownerElement?: IElement | null;
  prefix?: string | null;
  specified?: boolean;
  value?: string;
}

export interface IAttrReadonlyProperties extends INodeReadonlyProperties {
  localName?: string;
  name?: string;
  namespaceURI?: string | null;
  ownerElement?: IElement | null;
  prefix?: string | null;
  specified?: boolean;
}

export const { getState, setState, setReadonlyOfAttr } = InternalStateGenerator<
  IAttr,
  IAttrProperties,
  IAttrReadonlyProperties
>('Attr');
