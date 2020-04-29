import AwaitedPath from '../awaited-base/AwaitedPath';
import { IDocument } from '../awaited-base/interfaces/official';
import { setState } from '../awaited-base/official-klasses/Document';

// tslint:disable-next-line:variable-name
let Document: any;

export default function createDocument<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDocument {
  const instance = new (Document = Document || require('./Document'))();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
