import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IBlob, IBlobPart, IBlobPropertyBag } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IBlob, IBlobProperties>();
export const awaitedHandler = new AwaitedHandler<IBlob>('Blob', getState, setState);

export function BlobGenerator() {
  return class Blob implements IBlob {
    constructor(_blobParts?: Iterable<IBlobPart>, _options?: IBlobPropertyBag) {
      initializeConstantsAndProperties<Blob>(this, BlobConstantKeys, BlobPropertyKeys);
    }

    // properties

    public get size(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'size', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    // methods

    public arrayBuffer(): Promise<ArrayBuffer> {
      return awaitedHandler.runMethod<ArrayBuffer>(this, 'arrayBuffer', []);
    }

    public slice(start?: number, end?: number, contentType?: string): Promise<IBlob> {
      return awaitedHandler.runMethod<IBlob>(this, 'slice', [start, end, contentType]);
    }

    public text(): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'text', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IBlobProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly size?: Promise<number>;
  readonly type?: Promise<string>;
}

export const BlobPropertyKeys = ['size', 'type'];

export const BlobConstantKeys = [];
