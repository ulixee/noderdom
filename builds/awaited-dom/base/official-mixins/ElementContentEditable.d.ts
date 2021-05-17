import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IElementContentEditable } from '../interfaces/official';
export declare const getState: (instance: IElementContentEditable) => IElementContentEditableProperties, setState: (instance: IElementContentEditable, properties: Partial<IElementContentEditableProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IElementContentEditable>;
export default class ElementContentEditable implements IElementContentEditable {
    get contentEditable(): Promise<string>;
    get isContentEditable(): Promise<boolean>;
}
export interface IElementContentEditableProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly contentEditable?: Promise<string>;
    readonly isContentEditable?: Promise<boolean>;
}
export declare const ElementContentEditablePropertyKeys: string[];
export declare const ElementContentEditableConstantKeys: never[];
