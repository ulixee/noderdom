import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLSlotElementIsolate } from '../interfaces/isolate';
import { IAssignedNodesOptions } from '../interfaces/official';
import { ISuperElement, ISuperNode } from '../interfaces/super';
export declare const getState: (instance: IHTMLSlotElementIsolate) => IHTMLSlotElementIsolateProperties, setState: (instance: IHTMLSlotElementIsolate, properties: Partial<IHTMLSlotElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLSlotElementIsolate>;
export default class HTMLSlotElementIsolate implements IHTMLSlotElementIsolate {
    get name(): Promise<string>;
    assignedElements(options?: IAssignedNodesOptions): Promise<Iterable<ISuperElement>>;
    assignedNodes(options?: IAssignedNodesOptions): Promise<Iterable<ISuperNode>>;
}
export interface IHTMLSlotElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly name?: Promise<string>;
}
export declare const HTMLSlotElementIsolatePropertyKeys: string[];
export declare const HTMLSlotElementIsolateConstantKeys: never[];
