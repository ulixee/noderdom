import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IBlob, IBlobPart, IBlobPropertyBag } from '../interfaces';

export default class Blob implements IBlob {
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

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IBlobProperties {
  size?: number;
  type?: string;
}

export interface IBlobReadonlyProperties {
  size?: number;
  type?: string;
}

export const { getState, setState, setReadonlyOfBlob } = InternalStateGenerator<
  IBlob,
  IBlobProperties,
  IBlobReadonlyProperties
>('Blob');
