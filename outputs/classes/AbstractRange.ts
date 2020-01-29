import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, IAbstractRange } from '../interfaces';

export default class AbstractRange implements IAbstractRange {
  public get collapsed(): boolean {
    return InternalHandler.get<IAbstractRange, boolean>(this, 'collapsed');
  }

  public get endContainer(): INode {
    return InternalHandler.get<IAbstractRange, INode>(this, 'endContainer');
  }

  public get endOffset(): number {
    return InternalHandler.get<IAbstractRange, number>(this, 'endOffset');
  }

  public get startContainer(): INode {
    return InternalHandler.get<IAbstractRange, INode>(this, 'startContainer');
  }

  public get startOffset(): number {
    return InternalHandler.get<IAbstractRange, number>(this, 'startOffset');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IAbstractRangeProperties {
  collapsed?: boolean;
  endContainer?: INode;
  endOffset?: number;
  startContainer?: INode;
  startOffset?: number;
}

export interface IAbstractRangeReadonlyProperties {
  collapsed?: boolean;
  endContainer?: INode;
  endOffset?: number;
  startContainer?: INode;
  startOffset?: number;
}

export const { getState, setState, setReadonlyOfAbstractRange } = InternalStateGenerator<
  IAbstractRange,
  IAbstractRangeProperties,
  IAbstractRangeReadonlyProperties
>('AbstractRange');
