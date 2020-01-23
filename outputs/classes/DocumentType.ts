import InternalHandler from '../InternalHandler';
import { IDocumentType } from '../interfaces';
import Node, { INodeRps, rpNodeKeys } from './Node';
import ChildNode, { IChildNodeRps, rpChildNodeKeys } from '../mixins/ChildNode';

// tslint:disable-next-line:variable-name
const DocumentTypeBase = ChildNode(Node);

export default class DocumentType extends DocumentTypeBase implements IDocumentType {
  protected readonly _: IDocumentTypeRps = {};

  // properties

  public get name(): string {
    return InternalHandler.get<IDocumentType, string>(this, 'name');
  }

  public get publicId(): string {
    return InternalHandler.get<IDocumentType, string>(this, 'publicId');
  }

  public get systemId(): string {
    return InternalHandler.get<IDocumentType, string>(this, 'systemId');
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDocumentTypeKeys: Set<string> = new Set([...rpNodeKeys, ...rpChildNodeKeys]);

export interface IDocumentTypeRps extends INodeRps, IChildNodeRps {
  readonly name?: string;
  readonly publicId?: string;
  readonly systemId?: string;
}

export function setDocumentTypeRps(instance: IDocumentType, data: IDocumentTypeRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpDocumentTypeKeys.has(key)) {
      throw new Error(`${key} is not a property of DocumentType`);
    }
    properties[key] = value;
  });
}
