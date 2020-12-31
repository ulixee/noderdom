import StateMachine from '../../base/StateMachine';
import { ICaretPosition, IDOMRect } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { CaretPositionGenerator, ICaretPositionProperties } from '../../base/official-klasses/CaretPosition';
import { createSuperNode, createDOMRect } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICaretPosition, ICaretPositionProperties>();
const CaretPositionBaseClass = CaretPositionGenerator();

export default class CaretPosition extends CaretPositionBaseClass implements ICaretPosition {
  public get offsetNode(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('offsetNode'), awaitedOptions);
  }

  // methods

  public getClientRect(): IDOMRect {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMRect(awaitedPath.addMethod('getClientRect', ), awaitedOptions);
  }
}
