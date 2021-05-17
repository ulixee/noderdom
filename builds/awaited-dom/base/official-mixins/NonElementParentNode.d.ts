import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { INonElementParentNode } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
export declare const getState: (instance: INonElementParentNode) => INonElementParentNodeProperties, setState: (instance: INonElementParentNode, properties: Partial<INonElementParentNodeProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<INonElementParentNode>;
export default class NonElementParentNode implements INonElementParentNode {
    getElementById(elementId: string): ISuperElement;
}
export interface INonElementParentNodeProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const NonElementParentNodePropertyKeys: never[];
export declare const NonElementParentNodeConstantKeys: never[];
