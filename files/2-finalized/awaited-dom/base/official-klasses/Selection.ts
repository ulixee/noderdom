import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ISelection, IRange } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
import { INodeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISelection, ISelectionProperties>();
export const awaitedHandler = new AwaitedHandler<ISelection>('Selection', getState, setState);

export function SelectionGenerator() {
  return class Selection implements ISelection {
    constructor() {
    }

    // properties

    public get anchorNode(): ISuperNode {
      throw new Error('Selection.anchorNode getter not implemented');
    }

    public get anchorOffset(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'anchorOffset', false);
    }

    public get focusNode(): ISuperNode {
      throw new Error('Selection.focusNode getter not implemented');
    }

    public get focusOffset(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'focusOffset', false);
    }

    public get isCollapsed(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'isCollapsed', false);
    }

    public get rangeCount(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'rangeCount', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    // methods

    public addRange(range: IRange): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'addRange', [range]);
    }

    public collapse(node: INodeIsolate | null, offset?: number): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'collapse', [node, offset]);
    }

    public collapseToEnd(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'collapseToEnd', []);
    }

    public collapseToStart(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'collapseToStart', []);
    }

    public containsNode(node: INodeIsolate, allowPartialContainment?: boolean): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'containsNode', [node, allowPartialContainment]);
    }

    public deleteFromDocument(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'deleteFromDocument', []);
    }

    public empty(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'empty', []);
    }

    public extend(node: INodeIsolate, offset?: number): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'extend', [node, offset]);
    }

    public getRangeAt(index: number): IRange {
      throw new Error('Selection.getRangeAt not implemented');
    }

    public modify(alter: string, direction: string, granularity: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'modify', [alter, direction, granularity]);
    }

    public removeAllRanges(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'removeAllRanges', []);
    }

    public removeRange(range: IRange): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'removeRange', [range]);
    }

    public selectAllChildren(node: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'selectAllChildren', [node]);
    }

    public setBaseAndExtent(anchorNode: INodeIsolate, anchorOffset: number, focusNode: INodeIsolate, focusOffset: number): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setBaseAndExtent', [anchorNode, anchorOffset, focusNode, focusOffset]);
    }

    public setPosition(node: INodeIsolate | null, offset?: number): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setPosition', [node, offset]);
    }

    public toString(): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'toString', []);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, SelectionPropertyKeys, SelectionConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

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

export const SelectionPropertyKeys = ['anchorNode', 'anchorOffset', 'focusNode', 'focusOffset', 'isCollapsed', 'rangeCount', 'type'];

export const SelectionConstantKeys = [];
