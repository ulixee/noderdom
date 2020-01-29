import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ICharacterData, IComment } from '../interfaces';
import { ICharacterDataProperties, ICharacterDataReadonlyProperties } from './CharacterData';

// tslint:disable-next-line:variable-name
export function CommentGenerator(CharacterData: Constructable<ICharacterData>) {
  return class Comment extends CharacterData implements IComment {
    constructor(data?: string) {
      super();
      InternalHandler.construct(this, [data]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ICommentProperties extends ICharacterDataProperties {}

export interface ICommentReadonlyProperties extends ICharacterDataReadonlyProperties {}

export const { getState, setState, setReadonlyOfComment } = InternalStateGenerator<
  IComment,
  ICommentProperties,
  ICommentReadonlyProperties
>('Comment');
