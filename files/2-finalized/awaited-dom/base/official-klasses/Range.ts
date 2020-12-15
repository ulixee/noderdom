import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IRange, IDocumentFragment, IDOMRect, IDOMRectList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
import { INodeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IRange, IRangeProperties>();
export const awaitedHandler = new AwaitedHandler<IRange>('Range', getState, setState);

export function RangeGenerator() {
  return class Range implements IRange {
    public static readonly END_TO_END: number = 2;
    public static readonly END_TO_START: number = 3;
    public static readonly START_TO_END: number = 1;
    public static readonly START_TO_START: number = 0;

    public readonly END_TO_END: number = 2;
    public readonly END_TO_START: number = 3;
    public readonly START_TO_END: number = 1;
    public readonly START_TO_START: number = 0;
    constructor() {
      initializeConstantsAndProperties<Range>(this, RangeConstantKeys, RangePropertyKeys);
    }

    // properties

    public get commonAncestorContainer(): ISuperNode {
      throw new Error('Range.commonAncestorContainer getter not implemented');
    }

    // methods

    public cloneContents(): IDocumentFragment {
      throw new Error('Range.cloneContents not implemented');
    }

    public cloneRange(): IRange {
      throw new Error('Range.cloneRange not implemented');
    }

    public collapse(toStart?: boolean): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'collapse', [toStart]);
    }

    public compareBoundaryPoints(how: number, sourceRange: IRange): Promise<number> {
      return awaitedHandler.runMethod<number>(this, 'compareBoundaryPoints', [how, sourceRange]);
    }

    public comparePoint(node: INodeIsolate, offset: number): Promise<number> {
      return awaitedHandler.runMethod<number>(this, 'comparePoint', [node, offset]);
    }

    public createContextualFragment(fragment: string): IDocumentFragment {
      throw new Error('Range.createContextualFragment not implemented');
    }

    public deleteContents(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'deleteContents', []);
    }

    public detach(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'detach', []);
    }

    public extractContents(): IDocumentFragment {
      throw new Error('Range.extractContents not implemented');
    }

    public getBoundingClientRect(): IDOMRect {
      throw new Error('Range.getBoundingClientRect not implemented');
    }

    public getClientRects(): IDOMRectList {
      throw new Error('Range.getClientRects not implemented');
    }

    public insertNode(node: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'insertNode', [node]);
    }

    public intersectsNode(node: INodeIsolate): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'intersectsNode', [node]);
    }

    public isPointInRange(node: INodeIsolate, offset: number): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isPointInRange', [node, offset]);
    }

    public selectNode(node: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'selectNode', [node]);
    }

    public selectNodeContents(node: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'selectNodeContents', [node]);
    }

    public setEnd(node: INodeIsolate, offset: number): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setEnd', [node, offset]);
    }

    public setEndAfter(node: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setEndAfter', [node]);
    }

    public setEndBefore(node: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setEndBefore', [node]);
    }

    public setStart(node: INodeIsolate, offset: number): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setStart', [node, offset]);
    }

    public setStartAfter(node: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setStartAfter', [node]);
    }

    public setStartBefore(node: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setStartBefore', [node]);
    }

    public surroundContents(newParent: INodeIsolate): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'surroundContents', [newParent]);
    }

    public toString(): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'toString', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IRangeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly commonAncestorContainer?: ISuperNode;
}

export const RangePropertyKeys = ['commonAncestorContainer'];

export const RangeConstantKeys = ['END_TO_END', 'END_TO_START', 'START_TO_END', 'START_TO_START'];
