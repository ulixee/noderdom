import StateMachine from '../../base/StateMachine';
import { INonDocumentTypeChildNode } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import NonDocumentTypeChildNodeBase, { INonDocumentTypeChildNodeProperties } from '../../base/official-mixins/NonDocumentTypeChildNode';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INonDocumentTypeChildNode, INonDocumentTypeChildNodeProperties>();

export default class NonDocumentTypeChildNode extends NonDocumentTypeChildNodeBase implements INonDocumentTypeChildNode {
  public get nextElementSibling(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('nextElementSibling'), awaitedOptions);
  }

  public get previousElementSibling(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty('previousElementSibling'), awaitedOptions);
  }
}
