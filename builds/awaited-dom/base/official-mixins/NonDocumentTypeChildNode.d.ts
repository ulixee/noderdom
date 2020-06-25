import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { INonDocumentTypeChildNode } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
export declare const getState: <C = INonDocumentTypeChildNode, P = INonDocumentTypeChildNodeProperties>(instance: C) => P, setState: <P = INonDocumentTypeChildNodeProperties>(instance: INonDocumentTypeChildNode, properties: P) => void;
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
