import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IParentNode } from '../interfaces/official';
import { ISuperHTMLCollection, ISuperElement, ISuperNodeList } from '../interfaces/super';
export declare const getState: (instance: IParentNode) => IParentNodeProperties, setState: (instance: IParentNode, properties: Partial<IParentNodeProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IParentNode>;
export default class ParentNode implements IParentNode {
    get childElementCount(): Promise<number>;
    get children(): ISuperHTMLCollection;
    get firstElementChild(): ISuperElement;
    get lastElementChild(): ISuperElement;
    querySelector(selectors: string): ISuperElement;
    querySelectorAll(selectors: string): ISuperNodeList;
}
export interface IParentNodeProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly childElementCount?: Promise<number>;
    readonly children?: ISuperHTMLCollection;
    readonly firstElementChild?: ISuperElement;
    readonly lastElementChild?: ISuperElement;
}
export declare const ParentNodePropertyKeys: string[];
export declare const ParentNodeConstantKeys: never[];
