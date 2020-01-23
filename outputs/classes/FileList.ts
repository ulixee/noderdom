import InternalHandler from '../InternalHandler';
import { IFile, IFileList } from '../interfaces';

export default class FileList implements IFileList {
  protected readonly _: IFileListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<IFileList, number>(this, 'length');
  }

  // methods

  public item(index: number): IFile | null {
    return InternalHandler.run<IFileList, IFile | null>(this, 'item', [index]);
  }

  [index: number]: IFile;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpFileListKeys: Set<string> = new Set([]);

export interface IFileListRps {
  readonly length?: number;
}

export function setFileListRps(instance: IFileList, data: IFileListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpFileListKeys.has(key)) {
      throw new Error(`${key} is not a property of FileList`);
    }
    properties[key] = value;
  });
}
