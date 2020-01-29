import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IAbstractRange, INode, IRange, IDocumentFragment } from '../interfaces';
import { IAbstractRangeProperties, IAbstractRangeReadonlyProperties } from './AbstractRange';

// tslint:disable-next-line:variable-name
export function RangeGenerator(AbstractRange: Constructable<IAbstractRange>) {
  return class Range extends AbstractRange implements IRange {
    public static readonly END_TO_END: number = 2;
    public static readonly END_TO_START: number = 3;
    public static readonly START_TO_END: number = 1;
    public static readonly START_TO_START: number = 0;

    public readonly END_TO_END: number = 2;
    public readonly END_TO_START: number = 3;
    public readonly START_TO_END: number = 1;
    public readonly START_TO_START: number = 0;

    // properties

    public get commonAncestorContainer(): INode {
      return InternalHandler.get<IRange, INode>(this, 'commonAncestorContainer');
    }

    // methods

    public cloneContents(): IDocumentFragment {
      return InternalHandler.run<IRange, IDocumentFragment>(this, 'cloneContents', []);
    }

    public cloneRange(): IRange {
      return InternalHandler.run<IRange, IRange>(this, 'cloneRange', []);
    }

    public collapse(toStart?: boolean): void {
      InternalHandler.run<IRange, void>(this, 'collapse', [toStart]);
    }

    public compareBoundaryPoints(how: number, sourceRange: IRange): number {
      return InternalHandler.run<IRange, number>(this, 'compareBoundaryPoints', [how, sourceRange]);
    }

    public comparePoint(node: INode, offset: number): number {
      return InternalHandler.run<IRange, number>(this, 'comparePoint', [node, offset]);
    }

    public createContextualFragment(fragment: string): IDocumentFragment {
      return InternalHandler.run<IRange, IDocumentFragment>(this, 'createContextualFragment', [fragment]);
    }

    public deleteContents(): void {
      InternalHandler.run<IRange, void>(this, 'deleteContents', []);
    }

    public detach(): void {
      InternalHandler.run<IRange, void>(this, 'detach', []);
    }

    public extractContents(): IDocumentFragment {
      return InternalHandler.run<IRange, IDocumentFragment>(this, 'extractContents', []);
    }

    public insertNode(node: INode): void {
      InternalHandler.run<IRange, void>(this, 'insertNode', [node]);
    }

    public intersectsNode(node: INode): boolean {
      return InternalHandler.run<IRange, boolean>(this, 'intersectsNode', [node]);
    }

    public isPointInRange(node: INode, offset: number): boolean {
      return InternalHandler.run<IRange, boolean>(this, 'isPointInRange', [node, offset]);
    }

    public selectNode(node: INode): void {
      InternalHandler.run<IRange, void>(this, 'selectNode', [node]);
    }

    public selectNodeContents(node: INode): void {
      InternalHandler.run<IRange, void>(this, 'selectNodeContents', [node]);
    }

    public setEnd(node: INode, offset: number): void {
      InternalHandler.run<IRange, void>(this, 'setEnd', [node, offset]);
    }

    public setEndAfter(node: INode): void {
      InternalHandler.run<IRange, void>(this, 'setEndAfter', [node]);
    }

    public setEndBefore(node: INode): void {
      InternalHandler.run<IRange, void>(this, 'setEndBefore', [node]);
    }

    public setStart(node: INode, offset: number): void {
      InternalHandler.run<IRange, void>(this, 'setStart', [node, offset]);
    }

    public setStartAfter(node: INode): void {
      InternalHandler.run<IRange, void>(this, 'setStartAfter', [node]);
    }

    public setStartBefore(node: INode): void {
      InternalHandler.run<IRange, void>(this, 'setStartBefore', [node]);
    }

    public surroundContents(newParent: INode): void {
      InternalHandler.run<IRange, void>(this, 'surroundContents', [newParent]);
    }

    public toString(): string {
      return InternalHandler.run<IRange, string>(this, 'string', []);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IRangeProperties extends IAbstractRangeProperties {
  commonAncestorContainer?: INode;
}

export interface IRangeReadonlyProperties extends IAbstractRangeReadonlyProperties {
  commonAncestorContainer?: INode;
}

export const { getState, setState, setReadonlyOfRange } = InternalStateGenerator<
  IRange,
  IRangeProperties,
  IRangeReadonlyProperties
>('Range');
