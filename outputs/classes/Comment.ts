import InternalHandler from '../InternalHandler';
import { IComment } from '../interfaces';
import CharacterData, { ICharacterDataRps, rpCharacterDataKeys } from './CharacterData';

export default class Comment extends CharacterData implements IComment {
  constructor(data?: string) {
    super();
    InternalHandler.construct(this, [data]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpCommentKeys: Set<string> = new Set([...rpCharacterDataKeys]);

export interface ICommentRps extends ICharacterDataRps {}

export function setCommentRps(instance: IComment, data: ICommentRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpCommentKeys.has(key)) {
      throw new Error(`${key} is not a property of Comment`);
    }
    properties[key] = value;
  });
}
