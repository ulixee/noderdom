import InternalHandler from '../InternalHandler';
import { IDOMTokenList } from '../interfaces';

export default class DOMTokenList implements IDOMTokenList {
  protected readonly _: IDOMTokenListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<IDOMTokenList, number>(this, 'length');
  }

  public get value(): string {
    return InternalHandler.get<IDOMTokenList, string>(this, 'value');
  }

  public set value(value: string) {
    InternalHandler.set<IDOMTokenList, string>(this, 'value', value);
  }

  // methods

  public add(...tokens: string[]): void {
    InternalHandler.run<IDOMTokenList, void>(this, 'add', [tokens]);
  }

  public contains(token: string): boolean {
    return InternalHandler.run<IDOMTokenList, boolean>(this, 'contains', [token]);
  }

  public item(index: number): string | null {
    return InternalHandler.run<IDOMTokenList, string | null>(this, 'item', [index]);
  }

  public remove(...tokens: string[]): void {
    InternalHandler.run<IDOMTokenList, void>(this, 'remove', [tokens]);
  }

  public replace(token: string, newToken: string): boolean {
    return InternalHandler.run<IDOMTokenList, boolean>(this, 'replace', [token, newToken]);
  }

  public supports(token: string): boolean {
    return InternalHandler.run<IDOMTokenList, boolean>(this, 'supports', [token]);
  }

  public toggle(token: string, force?: boolean): boolean {
    return InternalHandler.run<IDOMTokenList, boolean>(this, 'toggle', [token, force]);
  }

  public toString(): string {
    return InternalHandler.run<IDOMTokenList, string>(this, 'string', []);
  }

  public forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): void {
    InternalHandler.run<IDOMTokenList, void>(this, 'forEach', [callbackfn, thisArg]);
  }

  [index: number]: string;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDOMTokenListKeys: Set<string> = new Set([]);

export interface IDOMTokenListRps {
  readonly length?: number;
}

export function setDOMTokenListRps(instance: IDOMTokenList, data: IDOMTokenListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpDOMTokenListKeys.has(key)) {
      throw new Error(`${key} is not a property of DOMTokenList`);
    }
    properties[key] = value;
  });
}
