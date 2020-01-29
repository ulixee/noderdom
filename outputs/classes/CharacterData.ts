import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, IChildNode, INonDocumentTypeChildNode, ICharacterData } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties } from './Node';
import { IChildNodeProperties, IChildNodeReadonlyProperties } from '../mixins/ChildNode';
import { INonDocumentTypeChildNodeProperties, INonDocumentTypeChildNodeReadonlyProperties } from '../mixins/NonDocumentTypeChildNode';

// tslint:disable-next-line:variable-name
export function CharacterDataGenerator(Node: Constructable<INode>, ChildNode: Constructable<IChildNode>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [ChildNode, NonDocumentTypeChildNode]) as unknown) as Constructable<INode & IChildNode & INonDocumentTypeChildNode>;

  return class CharacterData extends Parent implements ICharacterData {
    public get data(): string {
      return InternalHandler.get<ICharacterData, string>(this, 'data');
    }

    public set data(value: string) {
      InternalHandler.set<ICharacterData, string>(this, 'data', value);
    }

    public get length(): number {
      return InternalHandler.get<ICharacterData, number>(this, 'length');
    }

    // methods

    public appendData(data: string): void {
      InternalHandler.run<ICharacterData, void>(this, 'appendData', [data]);
    }

    public deleteData(offset: number, count: number): void {
      InternalHandler.run<ICharacterData, void>(this, 'deleteData', [offset, count]);
    }

    public insertData(offset: number, data: string): void {
      InternalHandler.run<ICharacterData, void>(this, 'insertData', [offset, data]);
    }

    public replaceData(offset: number, count: number, data: string): void {
      InternalHandler.run<ICharacterData, void>(this, 'replaceData', [offset, count, data]);
    }

    public substringData(offset: number, count: number): string {
      return InternalHandler.run<ICharacterData, string>(this, 'substringData', [offset, count]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ICharacterDataProperties extends INodeProperties, IChildNodeProperties, INonDocumentTypeChildNodeProperties {
  data?: string;
  length?: number;
}

export interface ICharacterDataReadonlyProperties extends INodeReadonlyProperties, IChildNodeReadonlyProperties, INonDocumentTypeChildNodeReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfCharacterData } = InternalStateGenerator<
  ICharacterData,
  ICharacterDataProperties,
  ICharacterDataReadonlyProperties
>('CharacterData');
