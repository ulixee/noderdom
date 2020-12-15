import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLLinkElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLinkElementIsolate, IHTMLLinkElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLLinkElementIsolate>('HTMLLinkElementIsolate', getState, setState);

export default class HTMLLinkElementIsolate implements IHTMLLinkElementIsolate {
  public get as(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'as', false);
  }

  public get crossOrigin(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'crossOrigin', true);
  }

  public get href(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'href', false);
  }

  public get hreflang(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'hreflang', false);
  }

  public get media(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'media', false);
  }

  public get referrerPolicy(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
  }

  public get rel(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'rel', false);
  }

  public get relList(): IDOMTokenList {
    throw new Error('HTMLLinkElementIsolate.relList getter not implemented');
  }

  public get sizes(): Promise<string> | IDOMTokenList {
    throw new Error('HTMLLinkElementIsolate.sizes getter not implemented');
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLinkElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly as?: Promise<string>;
  readonly crossOrigin?: Promise<string | null>;
  readonly href?: Promise<string>;
  readonly hreflang?: Promise<string>;
  readonly media?: Promise<string>;
  readonly referrerPolicy?: Promise<string>;
  readonly rel?: Promise<string>;
  readonly relList?: IDOMTokenList;
  readonly sizes?: Promise<string> | IDOMTokenList;
  readonly type?: Promise<string>;
}

export const HTMLLinkElementIsolatePropertyKeys = ['as', 'crossOrigin', 'href', 'hreflang', 'media', 'referrerPolicy', 'rel', 'relList', 'sizes', 'type'];

export const HTMLLinkElementIsolateConstantKeys = [];
