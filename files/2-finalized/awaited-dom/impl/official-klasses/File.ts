import StateMachine from '../../base/StateMachine';
import { IFile, IBlobPart, IFilePropertyBag } from '../../base/interfaces/official';
import { FileGenerator, IFileProperties } from '../../base/official-klasses/File';
import Blob from './Blob';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFile, IFileProperties>();
const FileBaseClass = FileGenerator(Blob);

export default class File extends FileBaseClass implements IFile {
  constructor(_fileBits: Iterable<IBlobPart>, _fileName: string, _options?: IFilePropertyBag) {
    super(_fileBits, _fileName, _options);
  }
}
