import StateMachine from '../../base/StateMachine';
import { IHTMLDocument } from '../../base/interfaces/official';
import { HTMLDocumentGenerator, IHTMLDocumentProperties } from '../../base/official-klasses/HTMLDocument';
import Document from './Document';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDocument, IHTMLDocumentProperties>();
const HTMLDocumentBaseClass = HTMLDocumentGenerator(Document);

export default class HTMLDocument extends HTMLDocumentBaseClass implements IHTMLDocument {
  constructor() {
    super();
  }
}
