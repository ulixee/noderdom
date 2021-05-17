import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDocumentOrShadowRoot, ICaretPosition, ISelection } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: IDocumentOrShadowRoot) => IDocumentOrShadowRootProperties, setState: (instance: IDocumentOrShadowRoot, properties: Partial<IDocumentOrShadowRootProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IDocumentOrShadowRoot>;
export default class DocumentOrShadowRoot implements IDocumentOrShadowRoot {
    get activeElement(): ISuperElement;
    get fullscreenElement(): ISuperElement;
    get pointerLockElement(): ISuperElement;
    caretPositionFromPoint(x: number, y: number): ICaretPosition;
    elementFromPoint(x: number, y: number): ISuperElement;
    getSelection(): ISelection;
}
export interface IDocumentOrShadowRootProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly activeElement?: ISuperElement;
    readonly fullscreenElement?: ISuperElement;
    readonly pointerLockElement?: ISuperElement;
}
export declare const DocumentOrShadowRootPropertyKeys: string[];
export declare const DocumentOrShadowRootConstantKeys: never[];
