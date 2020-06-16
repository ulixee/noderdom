import StateMachine from '../../awaited-base/StateMachine';
import { INodeIsolate } from '../../awaited-base/interfaces/isolate';
import { ISuperNodeList, ISuperNode, ISuperDocument, ISuperElement } from '../../awaited-base/interfaces/super';
import NodeIsolateBase, { INodeIsolateProperties } from '../../awaited-base/isolate-mixins/NodeIsolate';
import { createSuperNodeList, createSuperNode, createSuperDocument, createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INodeIsolate, INodeIsolateProperties>();

export default class NodeIsolate extends NodeIsolateBase implements INodeIsolate, PromiseLike<INodeIsolate> {
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
}
