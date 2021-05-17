import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { INonDocumentTypeChildNode } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: INonDocumentTypeChildNode) => INonDocumentTypeChildNodeProperties, setState: (instance: INonDocumentTypeChildNode, properties: Partial<INonDocumentTypeChildNodeProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<INonDocumentTypeChildNode>;
export default class NonDocumentTypeChildNode implements INonDocumentTypeChildNode {
    get nextElementSibling(): ISuperElement;
    get previousElementSibling(): ISuperElement;
}
export interface INonDocumentTypeChildNodeProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly nextElementSibling?: ISuperElement;
    readonly previousElementSibling?: ISuperElement;
}
export declare const NonDocumentTypeChildNodePropertyKeys: string[];
export declare const NonDocumentTypeChildNodeConstantKeys: never[];
