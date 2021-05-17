import { INonElementParentNode } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import NonElementParentNodeBase, { INonElementParentNodeProperties } from '../../base/official-mixins/NonElementParentNode';
export declare const getState: (instance: INonElementParentNode) => INonElementParentNodeProperties, setState: (instance: INonElementParentNode, properties: Partial<INonElementParentNodeProperties>) => void;
export default class NonElementParentNode extends NonElementParentNodeBase implements INonElementParentNode {
    getElementById(elementId: string): ISuperElement;
}
