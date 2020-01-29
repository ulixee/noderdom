import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, IChildNode, IDocumentType } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties } from './Node';
import { IChildNodeProperties, IChildNodeReadonlyProperties } from '../mixins/ChildNode';

// tslint:disable-next-line:variable-name
export function DocumentTypeGenerator(Node: Constructable<INode>, ChildNode: Constructable<IChildNode>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [ChildNode]) as unknown) as Constructable<INode & IChildNode>;

  return class DocumentType extends Parent implements IDocumentType {
    public get name(): string {
      return InternalHandler.get<IDocumentType, string>(this, 'name');
    }

    public get publicId(): string {
      return InternalHandler.get<IDocumentType, string>(this, 'publicId');
    }

    public get systemId(): string {
      return InternalHandler.get<IDocumentType, string>(this, 'systemId');
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDocumentTypeProperties extends INodeProperties, IChildNodeProperties {
  name?: string;
  publicId?: string;
  systemId?: string;
}

export interface IDocumentTypeReadonlyProperties extends INodeReadonlyProperties, IChildNodeReadonlyProperties {
  name?: string;
  publicId?: string;
  systemId?: string;
}

export const { getState, setState, setReadonlyOfDocumentType } = InternalStateGenerator<
  IDocumentType,
  IDocumentTypeProperties,
  IDocumentTypeReadonlyProperties
>('DocumentType');
