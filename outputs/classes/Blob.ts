import InternalHandler from '../InternalHandler';
import { IBlob, IBlobPart, IBlobPropertyBag } from '../interfaces';

export default class Blob implements IBlob {
  protected readonly _: IBlobRps = {};

  // constructor required for this class

  constructor(blobParts?: Iterable<IBlobPart>, options?: IBlobPropertyBag) {
    InternalHandler.construct(this, [blobParts, options]);
  }

  // properties

  public get size(): number {
    return InternalHandler.get<IBlob, number>(this, 'size');
  }

  public get type(): string {
    return InternalHandler.get<IBlob, string>(this, 'type');
  }

  // methods

  public slice(start?: number, end?: number, contentType?: string): IBlob {
    return InternalHandler.run<IBlob, IBlob>(this, 'slice', [start, end, contentType]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpBlobKeys: Set<string> = new Set([]);

export interface IBlobRps {
  readonly size?: number;
  readonly type?: string;
}

export function setBlobRps(instance: IBlob, data: IBlobRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpBlobKeys.has(key)) {
      throw new Error(`${key} is not a property of Blob`);
    }
    properties[key] = value;
  });
}
