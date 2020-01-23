import InternalHandler from '../InternalHandler';
import { ICharacterData } from '../interfaces';
import Node, { INodeRps, rpNodeKeys } from './Node';
import ChildNode, { IChildNodeRps, rpChildNodeKeys } from '../mixins/ChildNode';
import NonDocumentTypeChildNode, { INonDocumentTypeChildNodeRps, rpNonDocumentTypeChildNodeKeys } from '../mixins/NonDocumentTypeChildNode';

// tslint:disable-next-line:variable-name
const CharacterDataBase = ChildNode(NonDocumentTypeChildNode(Node));

export default class CharacterData extends CharacterDataBase implements ICharacterData {
  protected readonly _: ICharacterDataRps = {};

  // properties

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
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpCharacterDataKeys: Set<string> = new Set([...rpNodeKeys, ...rpChildNodeKeys, ...rpNonDocumentTypeChildNodeKeys]);

export interface ICharacterDataRps extends INodeRps, IChildNodeRps, INonDocumentTypeChildNodeRps {
  readonly length?: number;
}

export function setCharacterDataRps(instance: ICharacterData, data: ICharacterDataRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpCharacterDataKeys.has(key)) {
      throw new Error(`${key} is not a property of CharacterData`);
    }
    properties[key] = value;
  });
}
