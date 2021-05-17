import { INonDocumentTypeChildNode } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import NonDocumentTypeChildNodeBase, { INonDocumentTypeChildNodeProperties } from '../../base/official-mixins/NonDocumentTypeChildNode';
export declare const getState: (instance: INonDocumentTypeChildNode) => INonDocumentTypeChildNodeProperties, setState: (instance: INonDocumentTypeChildNode, properties: Partial<INonDocumentTypeChildNodeProperties>) => void;
export default class NonDocumentTypeChildNode extends NonDocumentTypeChildNodeBase implements INonDocumentTypeChildNode {
    get nextElementSibling(): ISuperElement;
    get previousElementSibling(): ISuperElement;
}
