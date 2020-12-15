import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLScriptElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLScriptElementIsolate, IHTMLScriptElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLScriptElementIsolate>('HTMLScriptElementIsolate', getState, setState);

export default class HTMLScriptElementIsolate implements IHTMLScriptElementIsolate {
  public get async(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'async', false);
  }

  public get charset(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'charset', false);
  }

  public get crossOrigin(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'crossOrigin', true);
  }

  public get defer(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'defer', false);
  }

  public get event(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'event', false);
  }

  public get noModule(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'noModule', false);
  }

  public get referrerPolicy(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
  }

  public get src(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'src', false);
  }

  public get text(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'text', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLScriptElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly async?: Promise<boolean>;
  readonly charset?: Promise<string>;
  readonly crossOrigin?: Promise<string | null>;
  readonly defer?: Promise<boolean>;
  readonly event?: Promise<string>;
  readonly noModule?: Promise<boolean>;
  readonly referrerPolicy?: Promise<string>;
  readonly src?: Promise<string>;
  readonly text?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLScriptElementIsolatePropertyKeys = ['async', 'charset', 'crossOrigin', 'defer', 'event', 'noModule', 'referrerPolicy', 'src', 'text', 'type'];

export const HTMLScriptElementIsolateConstantKeys = [];
