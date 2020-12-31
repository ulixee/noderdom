import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IFile, IBlob, IBlobPart, IFilePropertyBag } from '../interfaces/official';
import { IBlobProperties, BlobPropertyKeys, BlobConstantKeys } from './Blob';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFile, IFileProperties>();
export const awaitedHandler = new AwaitedHandler<IFile>('File', getState, setState);

export function FileGenerator(Blob: Constructable<IBlob>) {
  return class File extends Blob implements IFile {
    constructor(_fileBits: Iterable<IBlobPart>, _fileName: string, _options?: IFilePropertyBag) {
      super(_fileBits, _fileName, _options);
      initializeConstantsAndProperties<File>(this, FileConstantKeys, FilePropertyKeys);
    }

    // properties

    public get lastModified(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'lastModified', false);
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFileProperties extends IBlobProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly lastModified?: Promise<number>;
  readonly name?: Promise<string>;
}

export const FilePropertyKeys = [...BlobPropertyKeys, 'lastModified', 'name'];

export const FileConstantKeys = [...BlobConstantKeys];
