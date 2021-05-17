import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLSourceElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSourceElementIsolate, IHTMLSourceElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLSourceElementIsolate>('HTMLSourceElementIsolate', getState, setState);

export default class HTMLSourceElementIsolate implements IHTMLSourceElementIsolate {
  public get media(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'media', false);
  }

  public get sizes(): Promise<string> | IDOMTokenList {
    return awaitedHandler.getProperty<string>(this, 'sizes', false);
  }

  public get src(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'src', false);
  }

  public get srcset(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'srcset', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSourceElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly media?: Promise<string>;
  readonly sizes?: Promise<string> | IDOMTokenList;
  readonly src?: Promise<string>;
  readonly srcset?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLSourceElementIsolatePropertyKeys = ['media', 'sizes', 'src', 'srcset', 'type'];

export const HTMLSourceElementIsolateConstantKeys = [];
