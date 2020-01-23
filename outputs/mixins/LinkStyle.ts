import InternalHandler from '../InternalHandler';
import { IStyleSheet, ILinkStyle } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function LinkStyle<TBase extends Constructor>(base: TBase) {
  return class extends base implements ILinkStyle {
    public get sheet(): IStyleSheet | null {
      return InternalHandler.get<ILinkStyle, IStyleSheet | null>(this, 'sheet');
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpLinkStyleKeys: Set<string> = new Set([]);

export interface ILinkStyleRps {
  readonly sheet?: IStyleSheet | null;
}
