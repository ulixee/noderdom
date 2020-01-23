import InternalHandler from '../InternalHandler';
import { INode, IRange, ISelection } from '../interfaces';

export default class Selection implements ISelection {
  protected readonly _: ISelectionRps = {};

  // properties

  public get anchorNode(): INode | null {
    return InternalHandler.get<ISelection, INode | null>(this, 'anchorNode');
  }

  public get anchorOffset(): number {
    return InternalHandler.get<ISelection, number>(this, 'anchorOffset');
  }

  public get focusNode(): INode | null {
    return InternalHandler.get<ISelection, INode | null>(this, 'focusNode');
  }

  public get focusOffset(): number {
    return InternalHandler.get<ISelection, number>(this, 'focusOffset');
  }

  public get isCollapsed(): boolean {
    return InternalHandler.get<ISelection, boolean>(this, 'isCollapsed');
  }

  public get rangeCount(): number {
    return InternalHandler.get<ISelection, number>(this, 'rangeCount');
  }

  public get type(): string {
    return InternalHandler.get<ISelection, string>(this, 'type');
  }

  // methods

  public addRange(range: IRange): void {
    InternalHandler.run<ISelection, void>(this, 'addRange', [range]);
  }

  public collapse(node: INode | null, offset?: number): void {
    InternalHandler.run<ISelection, void>(this, 'collapse', [node, offset]);
  }

  public collapseToEnd(): void {
    InternalHandler.run<ISelection, void>(this, 'collapseToEnd', []);
  }

  public collapseToStart(): void {
    InternalHandler.run<ISelection, void>(this, 'collapseToStart', []);
  }

  public containsNode(node: INode, allowPartialContainment?: boolean): boolean {
    return InternalHandler.run<ISelection, boolean>(this, 'containsNode', [node, allowPartialContainment]);
  }

  public deleteFromDocument(): void {
    InternalHandler.run<ISelection, void>(this, 'deleteFromDocument', []);
  }

  public empty(): void {
    InternalHandler.run<ISelection, void>(this, 'empty', []);
  }

  public extend(node: INode, offset?: number): void {
    InternalHandler.run<ISelection, void>(this, 'extend', [node, offset]);
  }

  public getRangeAt(index: number): IRange {
    return InternalHandler.run<ISelection, IRange>(this, 'getRangeAt', [index]);
  }

  public removeAllRanges(): void {
    InternalHandler.run<ISelection, void>(this, 'removeAllRanges', []);
  }

  public removeRange(range: IRange): void {
    InternalHandler.run<ISelection, void>(this, 'removeRange', [range]);
  }

  public selectAllChildren(node: INode): void {
    InternalHandler.run<ISelection, void>(this, 'selectAllChildren', [node]);
  }

  public setBaseAndExtent(anchorNode: INode, anchorOffset: number, focusNode: INode, focusOffset: number): void {
    InternalHandler.run<ISelection, void>(this, 'setBaseAndExtent', [anchorNode, anchorOffset, focusNode, focusOffset]);
  }

  public setPosition(node: INode | null, offset?: number): void {
    InternalHandler.run<ISelection, void>(this, 'setPosition', [node, offset]);
  }

  public toString(): string {
    return InternalHandler.run<ISelection, string>(this, 'string', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSelectionKeys: Set<string> = new Set([]);

export interface ISelectionRps {
  readonly anchorNode?: INode | null;
  readonly anchorOffset?: number;
  readonly focusNode?: INode | null;
  readonly focusOffset?: number;
  readonly isCollapsed?: boolean;
  readonly rangeCount?: number;
  readonly type?: string;
}

export function setSelectionRps(instance: ISelection, data: ISelectionRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpSelectionKeys.has(key)) {
      throw new Error(`${key} is not a property of Selection`);
    }
    properties[key] = value;
  });
}
