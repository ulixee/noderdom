import StateMachine from '../../base/StateMachine';
import { IDocumentType } from '../../base/interfaces/official';
import { DocumentTypeGenerator, IDocumentTypeProperties } from '../../base/official-klasses/DocumentType';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDocumentType, IDocumentTypeProperties>();
const DocumentTypeBaseClass = DocumentTypeGenerator(Node);

export default class DocumentType extends DocumentTypeBaseClass implements IDocumentType {
  constructor() {
    super();
  }
}
