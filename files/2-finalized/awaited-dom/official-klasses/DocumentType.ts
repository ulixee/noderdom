import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IDocumentType } from '../../awaited-base/interfaces/official';
import { DocumentTypeGenerator, initialize, IDocumentTypeProperties } from '../../awaited-base/official-klasses/DocumentType';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentType, IDocumentTypeProperties>();
const DocumentTypeBase = DocumentTypeGenerator(Node);

export default class DocumentType extends DocumentTypeBase implements IDocumentType {
  constructor() {
    super();
    initialize(DocumentType, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createDocumentType<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDocumentType {
  const instance = new DocumentType();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
