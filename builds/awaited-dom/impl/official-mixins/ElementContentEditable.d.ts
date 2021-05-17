import { IElementContentEditable } from '../../base/interfaces/official';
import ElementContentEditableBase, { IElementContentEditableProperties } from '../../base/official-mixins/ElementContentEditable';
export declare const getState: (instance: IElementContentEditable) => IElementContentEditableProperties, setState: (instance: IElementContentEditable, properties: Partial<IElementContentEditableProperties>) => void;
export default class ElementContentEditable extends ElementContentEditableBase implements IElementContentEditable {
}
