import StateMachine from '../../base/StateMachine';
import { IDocumentFragment } from '../../base/interfaces/official';
import { DocumentFragmentGenerator, IDocumentFragmentProperties } from '../../base/official-klasses/DocumentFragment';
import Node from './Node';
import NonElementParentNode from '../official-mixins/NonElementParentNode';
import ParentNode from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentFragment, IDocumentFragmentProperties>();
const DocumentFragmentBaseClass = DocumentFragmentGenerator(Node, NonElementParentNode, ParentNode);

export default class DocumentFragment extends DocumentFragmentBaseClass implements IDocumentFragment {
  constructor() {
    super();
  }
}
