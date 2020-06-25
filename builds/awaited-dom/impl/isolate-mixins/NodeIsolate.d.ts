import { INodeIsolate } from '../../base/interfaces/isolate';
import { ISuperNodeList, ISuperNode, ISuperDocument, ISuperElement } from '../../base/interfaces/super';
import { IGetRootNodeOptions } from '../../base/interfaces/official';
import NodeIsolateBase, { INodeIsolateProperties } from '../../base/isolate-mixins/NodeIsolate';
export declare const getState: <C = INodeIsolate, P = INodeIsolateProperties>(instance: C) => P, setState: <P = INodeIsolateProperties>(instance: INodeIsolate, properties: P) => void;
export default class NodeIsolate extends NodeIsolateBase implements INodeIsolate {
    get childNodes(): ISuperNodeList;
    get firstChild(): ISuperNode;
    get lastChild(): ISuperNode;
    get nextSibling(): ISuperNode;
    get ownerDocument(): ISuperDocument;
    get parentElement(): ISuperElement;
    get parentNode(): ISuperNode;
    get previousSibling(): ISuperNode;
    getRootNode(options?: IGetRootNodeOptions): ISuperNode;
}
