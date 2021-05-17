import { ISelection, IRange } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { ISelectionProperties } from '../../base/official-klasses/Selection';
export declare const getState: (instance: ISelection) => ISelectionProperties, setState: (instance: ISelection, properties: Partial<ISelectionProperties>) => void;
declare const SelectionBaseClass: {
    new (): {
        readonly anchorNode: ISuperNode;
        readonly anchorOffset: Promise<number>;
        readonly focusNode: ISuperNode;
        readonly focusOffset: Promise<number>;
        readonly isCollapsed: Promise<boolean>;
        readonly rangeCount: Promise<number>;
        readonly type: Promise<string>;
        addRange(range: IRange): Promise<void>;
        collapse(node: import("../../base/interfaces/isolate").INodeIsolate | null, offset?: number | undefined): Promise<void>;
        collapseToEnd(): Promise<void>;
        collapseToStart(): Promise<void>;
        containsNode(node: import("../../base/interfaces/isolate").INodeIsolate, allowPartialContainment?: boolean | undefined): Promise<boolean>;
        deleteFromDocument(): Promise<void>;
        empty(): Promise<void>;
        extend(node: import("../../base/interfaces/isolate").INodeIsolate, offset?: number | undefined): Promise<void>;
        getRangeAt(index: number): IRange;
        modify(alter: string, direction: string, granularity: string): Promise<void>;
        removeAllRanges(): Promise<void>;
        removeRange(range: IRange): Promise<void>;
        selectAllChildren(node: import("../../base/interfaces/isolate").INodeIsolate): Promise<void>;
        setBaseAndExtent(anchorNode: import("../../base/interfaces/isolate").INodeIsolate, anchorOffset: number, focusNode: import("../../base/interfaces/isolate").INodeIsolate, focusOffset: number): Promise<void>;
        setPosition(node: import("../../base/interfaces/isolate").INodeIsolate | null, offset?: number | undefined): Promise<void>;
        toString(): Promise<string>;
    };
};
export default class Selection extends SelectionBaseClass implements ISelection {
    get anchorNode(): ISuperNode;
    get focusNode(): ISuperNode;
    getRangeAt(index: number): IRange;
}
export {};
