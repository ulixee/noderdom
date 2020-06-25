import { INodeListIsolate } from '../../base/interfaces/isolate';
import { ISuperNode } from '../../base/interfaces/super';
import NodeListIsolateBase, { INodeListIsolateProperties } from '../../base/isolate-mixins/NodeListIsolate';
export declare const getState: <C = INodeListIsolate, P = INodeListIsolateProperties>(instance: C) => P, setState: <P = INodeListIsolateProperties>(instance: INodeListIsolate, properties: P) => void;
export default class NodeListIsolate extends NodeListIsolateBase implements INodeListIsolate {
    item(index: number): ISuperNode;
}
