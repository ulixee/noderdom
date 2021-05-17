import { IDocumentOrShadowRoot, ICaretPosition, ISelection } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import DocumentOrShadowRootBase, { IDocumentOrShadowRootProperties } from '../../base/official-mixins/DocumentOrShadowRoot';
export declare const getState: (instance: IDocumentOrShadowRoot) => IDocumentOrShadowRootProperties, setState: (instance: IDocumentOrShadowRoot, properties: Partial<IDocumentOrShadowRootProperties>) => void;
export default class DocumentOrShadowRoot extends DocumentOrShadowRootBase implements IDocumentOrShadowRoot {
    get activeElement(): ISuperElement;
    get fullscreenElement(): ISuperElement;
    get pointerLockElement(): ISuperElement;
    caretPositionFromPoint(x: number, y: number): ICaretPosition;
    elementFromPoint(x: number, y: number): ISuperElement;
    getSelection(): ISelection;
}
