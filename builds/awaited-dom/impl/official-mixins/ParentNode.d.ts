import { IParentNode } from '../../base/interfaces/official';
import { ISuperHTMLCollection, ISuperElement, ISuperNodeList } from '../../base/interfaces/super';
import ParentNodeBase, { IParentNodeProperties } from '../../base/official-mixins/ParentNode';
export declare const getState: <C = IParentNode, P = IParentNodeProperties>(instance: C) => P, setState: <P = IParentNodeProperties>(instance: IParentNode, properties: P) => void;
export default class ParentNode extends ParentNodeBase implements IParentNode {
    get children(): ISuperHTMLCollection;
    get firstElementChild(): ISuperElement;
    get lastElementChild(): ISuperElement;
    querySelector(selectors: string): ISuperElement;
    querySelectorAll(selectors: string): ISuperNodeList;
}
