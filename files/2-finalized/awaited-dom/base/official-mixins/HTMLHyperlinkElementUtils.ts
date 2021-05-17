import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHyperlinkElementUtils } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHyperlinkElementUtils, IHTMLHyperlinkElementUtilsProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHyperlinkElementUtils>('HTMLHyperlinkElementUtils', getState, setState);

export default class HTMLHyperlinkElementUtils implements IHTMLHyperlinkElementUtils {
  public get hash(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'hash', false);
  }

  public get host(): Promise<string> | ISuperElement {
    return awaitedHandler.getProperty<string>(this, 'host', false);
  }

  public get hostname(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'hostname', false);
  }

  public get href(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'href', false);
  }

  public get origin(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'origin', false);
  }

  public get password(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'password', false);
  }

  public get pathname(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'pathname', false);
  }

  public get port(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'port', false);
  }

  public get protocol(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'protocol', false);
  }

  public get search(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'search', false);
  }

  public get username(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'username', false);
  }

  // methods

  public toString(): Promise<string> {
    return awaitedHandler.runMethod<string>(this, 'toString', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHyperlinkElementUtilsProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly hash?: Promise<string>;
  readonly host?: Promise<string> | ISuperElement;
  readonly hostname?: Promise<string>;
  readonly href?: Promise<string>;
  readonly origin?: Promise<string>;
  readonly password?: Promise<string>;
  readonly pathname?: Promise<string>;
  readonly port?: Promise<string>;
  readonly protocol?: Promise<string>;
  readonly search?: Promise<string>;
  readonly username?: Promise<string>;
}

export const HTMLHyperlinkElementUtilsPropertyKeys = ['hash', 'host', 'hostname', 'href', 'origin', 'password', 'pathname', 'port', 'protocol', 'search', 'username'];

export const HTMLHyperlinkElementUtilsConstantKeys = [];
