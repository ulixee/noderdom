// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { ILocation } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfLocation } = StateMachine<
  ILocation,
  ILocationProperties,
  ILocationReadonlyProperties
>('Location');

export const awaitedHandler = new AwaitedHandler<ILocation>('Location', getState, setState);

export default class Location implements ILocation {
  constructor() {
    initializeConstantsAndProperties<Location>(Location, this, LocationConstantKeys, LocationPropertyKeys);
  }

  // properties

  public get hash(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'hash', false);
  }

  public set hash(value: string) {
    awaitedHandler.setProperty<string>(this, 'hash', value);
  }

  public get host(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'host', false);
  }

  public set host(value: string) {
    awaitedHandler.setProperty<string>(this, 'host', value);
  }

  public get hostname(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'hostname', false);
  }

  public set hostname(value: string) {
    awaitedHandler.setProperty<string>(this, 'hostname', value);
  }

  public get href(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'href', false);
  }

  public set href(value: string) {
    awaitedHandler.setProperty<string>(this, 'href', value);
  }

  public get origin(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'origin', false);
  }

  public get pathname(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'pathname', false);
  }

  public set pathname(value: string) {
    awaitedHandler.setProperty<string>(this, 'pathname', value);
  }

  public get port(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'port', false);
  }

  public set port(value: string) {
    awaitedHandler.setProperty<string>(this, 'port', value);
  }

  public get protocol(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'protocol', false);
  }

  public set protocol(value: string) {
    awaitedHandler.setProperty<string>(this, 'protocol', value);
  }

  public get search(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'search', false);
  }

  public set search(value: string) {
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
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ILocationReadonlyProperties {
  readonly origin?: Promise<string>;
}

export interface ILocationProperties extends ILocationReadonlyProperties {
  hash?: Promise<string>;
  host?: Promise<string>;
  hostname?: Promise<string>;
  href?: Promise<string>;
  pathname?: Promise<string>;
  port?: Promise<string>;
  protocol?: Promise<string>;
  search?: Promise<string>;
}

export const LocationPropertyKeys = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];

export const LocationConstantKeys = [];
