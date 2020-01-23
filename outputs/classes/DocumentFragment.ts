import { IDocumentFragment } from '../interfaces';
import Node, { INodeRps, rpNodeKeys } from './Node';
import NonElementParentNode, { INonElementParentNodeRps, rpNonElementParentNodeKeys } from '../mixins/NonElementParentNode';
import ParentNode, { IParentNodeRps, rpParentNodeKeys } from '../mixins/ParentNode';

// tslint:disable-next-line:variable-name
const DocumentFragmentBase = NonElementParentNode(ParentNode(Node));

export default class DocumentFragment extends DocumentFragmentBase implements IDocumentFragment {}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDocumentFragmentKeys: Set<string> = new Set([...rpNodeKeys, ...rpNonElementParentNodeKeys, ...rpParentNodeKeys]);

export interface IDocumentFragmentRps extends INodeRps, INonElementParentNodeRps, IParentNodeRps {}

export function setDocumentFragmentRps(instance: IDocumentFragment, data: IDocumentFragmentRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpDocumentFragmentKeys.has(key)) {
      throw new Error(`${key} is not a property of DocumentFragment`);
    }
    properties[key] = value;
  });
}
