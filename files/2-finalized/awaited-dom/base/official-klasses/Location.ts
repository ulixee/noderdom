import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ILocation } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ILocation, ILocationProperties>();
export const awaitedHandler = new AwaitedHandler<ILocation>('Location', getState, setState);

export function LocationGenerator() {
  return class Location implements ILocation {
    constructor() {
      initializeConstantsAndProperties<Location>(this, LocationConstantKeys, LocationPropertyKeys);
    }

    // properties

    public get hash(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'hash', false);
    }

    public set hash(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'hash', value);
    }

    public get host(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'host', false);
    }

    public set host(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'host', value);
    }

    public get hostname(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'hostname', false);
    }

    public set hostname(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'hostname', value);
    }

    public get href(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'href', false);
    }

    public set href(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'href', value);
    }

    public get origin(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'origin', false);
    }

    public get pathname(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'pathname', false);
    }

    public set pathname(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'pathname', value);
    }

    public get port(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'port', false);
    }

    public set port(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'port', value);
    }

    public get protocol(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'protocol', false);
    }

    public set protocol(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'protocol', value);
    }

    public get search(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'search', false);
    }

    public set search(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'search', value);
    }

    // methods

    public assign(url: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'assign', [url]);
    }

    public reload(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'reload', []);
    }

    public replace(url: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'replace', [url]);
    }

    public toString(): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'toString', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ILocationProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  hash?: Promise<string> | any;
  host?: Promise<string> | any;
  hostname?: Promise<string> | any;
  href?: Promise<string> | any;
  readonly origin?: Promise<string>;
  pathname?: Promise<string> | any;
  port?: Promise<string> | any;
  protocol?: Promise<string> | any;
  search?: Promise<string> | any;
}

export const LocationPropertyKeys = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];

export const LocationConstantKeys = [];
