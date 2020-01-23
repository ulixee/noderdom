import InternalHandler from '../InternalHandler';
import { IBlobPart, IFilePropertyBag, IFile } from '../interfaces';
import Blob, { IBlobRps, rpBlobKeys } from './Blob';

export default class File extends Blob implements IFile {
  protected readonly _: IFileRps = {};

  // constructor required for this class

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
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpFileKeys: Set<string> = new Set([...rpBlobKeys]);

export interface IFileRps extends IBlobRps {
  readonly lastModified?: number;
  readonly name?: string;
}

export function setFileRps(instance: IFile, data: IFileRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpFileKeys.has(key)) {
      throw new Error(`${key} is not a property of File`);
    }
    properties[key] = value;
  });
}
