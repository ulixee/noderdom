import StateMachine from '../../base/StateMachine';
import { ISelection, IRange } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { SelectionGenerator, ISelectionProperties } from '../../base/official-klasses/Selection';
import { createSuperNode, createRange } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISelection, ISelectionProperties>();
const SelectionBaseClass = SelectionGenerator();

export default class Selection extends SelectionBaseClass implements ISelection {
  public get anchorNode(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'anchorNode'), awaitedOptions);
  }

  public get focusNode(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'focusNode'), awaitedOptions);
  }

  // methods

  public getRangeAt(index: number): IRange {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createRange(awaitedPath.addMethod(this, 'getRangeAt', index), awaitedOptions);
  }
}
