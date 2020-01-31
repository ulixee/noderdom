import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ITextTrackCue, ITextTrackCueList } from '../interfaces';

export default class TextTrackCueList implements ITextTrackCueList {
  public get length(): number {
    return InternalHandler.get<ITextTrackCueList, number>(this, 'length');
  }

  // methods

  public getCueById(id: string): ITextTrackCue | null {
    return InternalHandler.run<ITextTrackCueList, ITextTrackCue | null>(this, 'getCueById', [id]);
  }

  public [Symbol.iterator](): IterableIterator<ITextTrackCue> {
    return InternalHandler.run<ITextTrackCueList, IterableIterator<ITextTrackCue>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: ITextTrackCue;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ITextTrackCueListProperties {
  length?: number;
}

export interface ITextTrackCueListReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfTextTrackCueList } = InternalStateGenerator<
  ITextTrackCueList,
  ITextTrackCueListProperties,
  ITextTrackCueListReadonlyProperties
>('TextTrackCueList');
