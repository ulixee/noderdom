import StateMachine from '../../base/StateMachine';
import { IDocumentOrShadowRoot, ICaretPosition, ISelection } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import DocumentOrShadowRootBase, { IDocumentOrShadowRootProperties } from '../../base/official-mixins/DocumentOrShadowRoot';
import { createSuperElement, createCaretPosition, createSelection } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentOrShadowRoot, IDocumentOrShadowRootProperties>();

export default class DocumentOrShadowRoot extends DocumentOrShadowRootBase implements IDocumentOrShadowRoot {
  public get activeElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'activeElement'), awaitedOptions);
  }

  public get fullscreenElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'fullscreenElement'), awaitedOptions);
  }

  public get pointerLockElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'pointerLockElement'), awaitedOptions);
  }

  // methods

  public caretPositionFromPoint(x: number, y: number): ICaretPosition {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCaretPosition(awaitedPath.addMethod(this, 'caretPositionFromPoint', x, y), awaitedOptions);
  }

  public elementFromPoint(x: number, y: number): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod(this, 'elementFromPoint', x, y), awaitedOptions);
  }

  public getSelection(): ISelection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSelection(awaitedPath.addMethod(this, 'getSelection', ), awaitedOptions);
  }
}
