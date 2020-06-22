import StateMachine from '../../awaited-base/StateMachine';
import { ISuperNode, ISuperNodeList, ISuperDocument, ISuperElement } from '../../awaited-base/interfaces/super';
import { IGetRootNodeOptions } from '../../awaited-base/interfaces/official';
import { SuperNodeGenerator, ISuperNodeProperties } from '../../awaited-base/super-klasses/SuperNode';
import { createSuperNodeList, createSuperNode, createSuperDocument, createSuperElement } from '../create';
import AttrIsolate from '../isolate-mixins/AttrIsolate';
import CharacterDataIsolate from '../isolate-mixins/CharacterDataIsolate';
import DocumentIsolate from '../isolate-mixins/DocumentIsolate';
import DocumentTypeIsolate from '../isolate-mixins/DocumentTypeIsolate';
import ElementIsolate from '../isolate-mixins/ElementIsolate';
import HTMLElementIsolate from '../isolate-mixins/HTMLElementIsolate';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import HTMLInputElementIsolate from '../isolate-mixins/HTMLInputElementIsolate';
import HTMLOrSVGElement from '../official-mixins/HTMLOrSVGElement';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import ParentNode from '../official-mixins/ParentNode';
import TextIsolate from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNode, ISuperNodeProperties>();
const SuperNodeBaseClass = SuperNodeGenerator(AttrIsolate, CharacterDataIsolate, DocumentIsolate, DocumentTypeIsolate, ElementIsolate, HTMLElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLOrSVGElement, NodeIsolate, ParentNode, TextIsolate);

export default class SuperNode extends SuperNodeBaseClass implements ISuperNode {
  constructor() {
    super();
  }

  // properties

  public get childNodes(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty('childNodes'), awaitedOptions);
  }

  public get firstChild(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('firstChild'), awaitedOptions);
  }

  public get lastChild(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('lastChild'), awaitedOptions);
  }

  public get nextSibling(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('nextSibling'), awaitedOptions);
  }

  public get ownerDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty('ownerDocument'), awaitedOptions);
  }

  public get parentElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('parentElement'), awaitedOptions);
  }

  public get parentNode(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('parentNode'), awaitedOptions);
  }

  public get previousSibling(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('previousSibling'), awaitedOptions);
  }

  // methods

  public getRootNode(options?: IGetRootNodeOptions): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod('getRootNode', options), awaitedOptions);
  }
}
