import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ISelection, IRange } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
import { INodeIsolate } from '../interfaces/isolate';
export declare const getState: (instance: ISelection) => ISelectionProperties, setState: (instance: ISelection, properties: Partial<ISelectionProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ISelection>;
export declare function SelectionGenerator(): {
    new (): {
        readonly anchorNode: ISuperNode;
        readonly anchorOffset: Promise<number>;
        readonly focusNode: ISuperNode;
        readonly focusOffset: Promise<number>;
        readonly isCollapsed: Promise<boolean>;
        readonly rangeCount: Promise<number>;
        readonly type: Promise<string>;
        addRange(range: IRange): Promise<void>;
        collapse(node: INodeIsolate | null, offset?: number): Promise<void>;
        collapseToEnd(): Promise<void>;
        collapseToStart(): Promise<void>;
        containsNode(node: INodeIsolate, allowPartialContainment?: boolean): Promise<boolean>;
        deleteFromDocument(): Promise<void>;
        empty(): Promise<void>;
        extend(node: INodeIsolate, offset?: number): Promise<void>;
        getRangeAt(index: number): IRange;
        modify(alter: string, direction: string, granularity: string): Promise<void>;
        removeAllRanges(): Promise<void>;
        removeRange(range: IRange): Promise<void>;
        selectAllChildren(node: INodeIsolate): Promise<void>;
        setBaseAndExtent(anchorNode: INodeIsolate, anchorOffset: number, focusNode: INodeIsolate, focusOffset: number): Promise<void>;
        setPosition(node: INodeIsolate | null, offset?: number): Promise<void>;
        toString(): Promise<string>;
    };
};
export interface ISelectionProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly anchorNode?: ISuperNode;
    readonly anchorOffset?: Promise<number>;
    readonly focusNode?: ISuperNode;
    readonly focusOffset?: Promise<number>;
    readonly isCollapsed?: Promise<boolean>;
    readonly rangeCount?: Promise<number>;
    readonly type?: Promise<string>;
}
export declare const SelectionPropertyKeys: string[];
export declare const SelectionConstantKeys: never[];
