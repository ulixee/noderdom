import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IFile, IFileList } from '../interfaces';

export default class FileList implements IFileList {
  public get length(): number {
    return InternalHandler.get<IFileList, number>(this, 'length');
  }

  // methods

  public item(index: number): IFile | null {
    return InternalHandler.run<IFileList, IFile | null>(this, 'item', [index]);
  }

  public [Symbol.iterator](): IterableIterator<IFile> {
    return InternalHandler.run<IFileList, IterableIterator<IFile>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: IFile;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IFileListProperties {
  length?: number;
}

export interface IFileListReadonlyProperties {
  length?: number;
}

export const { getState, setState, setReadonlyOfFileList } = InternalStateGenerator<
  IFileList,
  IFileListProperties,
  IFileListReadonlyProperties
>('FileList');
