import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IBlob, IBlobPart, IFilePropertyBag, IFile } from '../interfaces';
import { IBlobProperties, IBlobReadonlyProperties } from './Blob';

// tslint:disable-next-line:variable-name
export function FileGenerator(Blob: Constructable<IBlob>) {
  return class File extends Blob implements IFile {
    constructor(fileBits: Iterable<IBlobPart>, fileName: string, options?: IFilePropertyBag) {
      super();
      InternalHandler.construct(this, [fileBits, fileName, options]);
    }

    // properties

    public get lastModified(): number {
      return InternalHandler.get<IFile, number>(this, 'lastModified');
    }

    public get name(): string {
      return InternalHandler.get<IFile, string>(this, 'name');
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IFileProperties extends IBlobProperties {
  lastModified?: number;
  name?: string;
}

export interface IFileReadonlyProperties extends IBlobReadonlyProperties {
  lastModified?: number;
  name?: string;
}

export const { getState, setState, setReadonlyOfFile } = InternalStateGenerator<
  IFile,
  IFileProperties,
  IFileReadonlyProperties
>('File');
