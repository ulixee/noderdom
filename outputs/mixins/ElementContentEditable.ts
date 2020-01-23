import { IElementContentEditable } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ElementContentEditable<TBase extends Constructor>(base: TBase) {
  return class extends base implements IElementContentEditable {};
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpElementContentEditableKeys: Set<string> = new Set([]);

export interface IElementContentEditableRps {}
