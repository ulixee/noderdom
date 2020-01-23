import InternalHandler from '../InternalHandler';
import { ILocation } from '../interfaces';

export default class Location implements ILocation {
  protected readonly _: ILocationRps = {};

  // properties

  public get hash(): string {
    return InternalHandler.get<ILocation, string>(this, 'hash');
  }

  public set hash(value: string) {
    InternalHandler.set<ILocation, string>(this, 'hash', value);
  }

  public get host(): string {
    return InternalHandler.get<ILocation, string>(this, 'host');
  }

  public set host(value: string) {
    InternalHandler.set<ILocation, string>(this, 'host', value);
  }

  public get hostname(): string {
    return InternalHandler.get<ILocation, string>(this, 'hostname');
  }

  public set hostname(value: string) {
    InternalHandler.set<ILocation, string>(this, 'hostname', value);
  }

  public get href(): string {
    return InternalHandler.get<ILocation, string>(this, 'href');
  }

  public set href(value: string) {
    InternalHandler.set<ILocation, string>(this, 'href', value);
  }

  public get origin(): string {
    return InternalHandler.get<ILocation, string>(this, 'origin');
  }

  public get pathname(): string {
    return InternalHandler.get<ILocation, string>(this, 'pathname');
  }

  public set pathname(value: string) {
    InternalHandler.set<ILocation, string>(this, 'pathname', value);
  }

  public get port(): string {
    return InternalHandler.get<ILocation, string>(this, 'port');
  }

  public set port(value: string) {
    InternalHandler.set<ILocation, string>(this, 'port', value);
  }

  public get protocol(): string {
    return InternalHandler.get<ILocation, string>(this, 'protocol');
  }

  public set protocol(value: string) {
    InternalHandler.set<ILocation, string>(this, 'protocol', value);
  }

  public get search(): string {
    return InternalHandler.get<ILocation, string>(this, 'search');
  }

  public set search(value: string) {
    InternalHandler.set<ILocation, string>(this, 'search', value);
  }

  // methods

  public assign(url: string): void {
    InternalHandler.run<ILocation, void>(this, 'assign', [url]);
  }

  public reload(): void {
    InternalHandler.run<ILocation, void>(this, 'reload', []);
  }

  public replace(url: string): void {
    InternalHandler.run<ILocation, void>(this, 'replace', [url]);
  }

  public toString(): string {
    return InternalHandler.run<ILocation, string>(this, 'string', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpLocationKeys: Set<string> = new Set([]);

export interface ILocationRps {
  readonly origin?: string;
}

export function setLocationRps(instance: ILocation, data: ILocationRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpLocationKeys.has(key)) {
      throw new Error(`${key} is not a property of Location`);
    }
    properties[key] = value;
  });
}
