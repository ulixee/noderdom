import { INodeListIsolate } from '../../base/interfaces/isolate';
import { ISuperNode } from '../../base/interfaces/super';
import NodeListIsolateBase, { INodeListIsolateProperties } from '../../base/isolate-mixins/NodeListIsolate';
export declare const getState: (instance: INodeListIsolate) => INodeListIsolateProperties, setState: (instance: INodeListIsolate, properties: Partial<INodeListIsolateProperties>) => void;
export default class NodeListIsolate extends NodeListIsolateBase implements INodeListIsolate {
    item(index: number): ISuperNode;
}
