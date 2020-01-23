import InternalHandler from '../InternalHandler';
import { ITextTrackCue, ITextTrackCueList } from '../interfaces';

export default class TextTrackCueList implements ITextTrackCueList {
  protected readonly _: ITextTrackCueListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<ITextTrackCueList, number>(this, 'length');
  }

  // methods

  public getCueById(id: string): ITextTrackCue | null {
    return InternalHandler.run<ITextTrackCueList, ITextTrackCue | null>(this, 'getCueById', [id]);
  }

  [index: number]: ITextTrackCue;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpTextTrackCueListKeys: Set<string> = new Set([]);

export interface ITextTrackCueListRps {
  readonly length?: number;
}

export function setTextTrackCueListRps(instance: ITextTrackCueList, data: ITextTrackCueListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpTextTrackCueListKeys.has(key)) {
      throw new Error(`${key} is not a property of TextTrackCueList`);
    }
    properties[key] = value;
  });
}
