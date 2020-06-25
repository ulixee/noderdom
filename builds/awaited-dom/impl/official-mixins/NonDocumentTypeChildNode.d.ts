import { INonDocumentTypeChildNode } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import NonDocumentTypeChildNodeBase, { INonDocumentTypeChildNodeProperties } from '../../base/official-mixins/NonDocumentTypeChildNode';
export declare const getState: <C = INonDocumentTypeChildNode, P = INonDocumentTypeChildNodeProperties>(instance: C) => P, setState: <P = INonDocumentTypeChildNodeProperties>(instance: INonDocumentTypeChildNode, properties: P) => void;
export default class NonDocumentTypeChildNode extends NonDocumentTypeChildNodeBase implements INonDocumentTypeChildNode {
    get nextElementSibling(): ISuperElement;
    get previousElementSibling(): ISuperElement;
}
