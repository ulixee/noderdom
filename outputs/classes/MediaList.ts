import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IMediaList } from '../interfaces';

export default class MediaList implements IMediaList {
  public get length(): number {
    return InternalHandler.get<IMediaList, number>(this, 'length');
  }

  public get mediaText(): string {
    return InternalHandler.get<IMediaList, string>(this, 'mediaText');
  }

  public set mediaText(value: string) {
    InternalHandler.set<IMediaList, string>(this, 'mediaText', value);
  }

  // methods

  public appendMedium(medium: string): void {
    InternalHandler.run<IMediaList, void>(this, 'appendMedium', [medium]);
  }

  public deleteMedium(medium: string): void {
    InternalHandler.run<IMediaList, void>(this, 'deleteMedium', [medium]);
  }

  public item(index: number): string | null {
    return InternalHandler.run<IMediaList, string | null>(this, 'item', [index]);
  }

  public toString(): string {
    return InternalHandler.run<IMediaList, string>(this, 'string', []);
  }

  public [Symbol.iterator](): IterableIterator<string> {
    return InternalHandler.run<IMediaList, IterableIterator<string>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: string;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IMediaListProperties {
  length?: number;
  mediaText?: string;
}

export interface IMediaListReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfMediaList } = InternalStateGenerator<
  IMediaList,
  IMediaListProperties,
  IMediaListReadonlyProperties
>('MediaList');
