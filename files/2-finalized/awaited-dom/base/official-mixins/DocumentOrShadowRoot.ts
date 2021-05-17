import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IDocumentOrShadowRoot, ICaretPosition, ISelection } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentOrShadowRoot, IDocumentOrShadowRootProperties>();
export const awaitedHandler = new AwaitedHandler<IDocumentOrShadowRoot>('DocumentOrShadowRoot', getState, setState);

export default class DocumentOrShadowRoot implements IDocumentOrShadowRoot {
  public get activeElement(): ISuperElement {
    throw new Error('DocumentOrShadowRoot.activeElement getter not implemented');
  }

  public get fullscreenElement(): ISuperElement {
    throw new Error('DocumentOrShadowRoot.fullscreenElement getter not implemented');
  }

  public get pointerLockElement(): ISuperElement {
    throw new Error('DocumentOrShadowRoot.pointerLockElement getter not implemented');
  }

  // methods

  public caretPositionFromPoint(x: number, y: number): ICaretPosition {
    throw new Error('DocumentOrShadowRoot.caretPositionFromPoint not implemented');
  }

  public elementFromPoint(x: number, y: number): ISuperElement {
    throw new Error('DocumentOrShadowRoot.elementFromPoint not implemented');
  }

  public getSelection(): ISelection {
    throw new Error('DocumentOrShadowRoot.getSelection not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentOrShadowRootProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly activeElement?: ISuperElement;
  readonly fullscreenElement?: ISuperElement;
  readonly pointerLockElement?: ISuperElement;
}

export const DocumentOrShadowRootPropertyKeys = ['activeElement', 'fullscreenElement', 'pointerLockElement'];

export const DocumentOrShadowRootConstantKeys = [];
