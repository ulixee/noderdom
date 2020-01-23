import InternalHandler from '../InternalHandler';
import { INode, IAbstractRange } from '../interfaces';

export default class AbstractRange implements IAbstractRange {
  protected readonly _: IAbstractRangeRps = {};

  // properties

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

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpAbstractRangeKeys: Set<string> = new Set([]);

export interface IAbstractRangeRps {
  readonly collapsed?: boolean;
  readonly endContainer?: INode;
  readonly endOffset?: number;
  readonly startContainer?: INode;
  readonly startOffset?: number;
}

export function setAbstractRangeRps(instance: IAbstractRange, data: IAbstractRangeRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpAbstractRangeKeys.has(key)) {
      throw new Error(`${key} is not a property of AbstractRange`);
    }
    properties[key] = value;
  });
}
