import StateMachine from '../../base/StateMachine';
import { INodeIsolate } from '../../base/interfaces/isolate';
import { ISuperNodeList, ISuperNode, ISuperDocument, ISuperElement } from '../../base/interfaces/super';
import { IGetRootNodeOptions } from '../../base/interfaces/official';
import NodeIsolateBase, { INodeIsolateProperties } from '../../base/isolate-mixins/NodeIsolate';
import { createSuperNodeList, createSuperNode, createSuperDocument, createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeIsolate, INodeIsolateProperties>();

export default class NodeIsolate extends NodeIsolateBase implements INodeIsolate {
  public get childNodes(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty(this, 'childNodes'), awaitedOptions);
  }

  public get firstChild(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'firstChild'), awaitedOptions);
  }

  public get lastChild(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'lastChild'), awaitedOptions);
  }

  public get nextSibling(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'nextSibling'), awaitedOptions);
  }

  public get ownerDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty(this, 'ownerDocument'), awaitedOptions);
  }

  public get parentElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'parentElement'), awaitedOptions);
  }

  public get parentNode(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'parentNode'), awaitedOptions);
  }

  public get previousSibling(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'previousSibling'), awaitedOptions);
  }

  // methods

  public getRootNode(options?: IGetRootNodeOptions): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod(this, 'getRootNode', options), awaitedOptions);
  }
}
