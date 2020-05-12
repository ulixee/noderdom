import StateMachine from '../../awaited-base/StateMachine';
import { IDocumentType } from '../../awaited-base/interfaces/official';
import { DocumentTypeGenerator, IDocumentTypeProperties } from '../../awaited-base/official-klasses/DocumentType';
import Node from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentType, IDocumentTypeProperties>();
const DocumentTypeBase = DocumentTypeGenerator(Node);

export default class DocumentType extends DocumentTypeBase implements IDocumentType {
  constructor() {
    super();
  }
}
