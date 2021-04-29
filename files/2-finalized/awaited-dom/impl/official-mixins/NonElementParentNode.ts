import StateMachine from '../../base/StateMachine';
import { INonElementParentNode } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import NonElementParentNodeBase, { INonElementParentNodeProperties } from '../../base/official-mixins/NonElementParentNode';
import { createSuperElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<INonElementParentNode, INonElementParentNodeProperties>();

export default class NonElementParentNode extends NonElementParentNodeBase implements INonElementParentNode {
  public getElementById(elementId: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod(this, 'getElementById', elementId), awaitedOptions);
  }
}
