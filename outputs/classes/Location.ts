import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ILocation } from '../interfaces';

export default class Location implements ILocation {
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

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ILocationProperties {
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
}

export interface ILocationReadonlyProperties {
  origin?: string;
}

export const { getState, setState, setReadonlyOfLocation } = InternalStateGenerator<
  ILocation,
  ILocationProperties,
  ILocationReadonlyProperties
>('Location');
