import StateMachine from '../../base/StateMachine';
import { IFileList, IFile } from '../../base/interfaces/official';
import { FileListGenerator, IFileListProperties } from '../../base/official-klasses/FileList';
import { createFile } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFileList, IFileListProperties>();
const FileListBaseClass = FileListGenerator();

export default class FileList extends FileListBaseClass implements IFileList {
  public item(index: number): IFile {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createFile(awaitedPath.addMethod('item', index), awaitedOptions);
  }
}
