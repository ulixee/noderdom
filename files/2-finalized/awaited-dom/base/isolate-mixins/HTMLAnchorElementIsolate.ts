import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLAnchorElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLAnchorElementIsolate, IHTMLAnchorElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLAnchorElementIsolate>('HTMLAnchorElementIsolate', getState, setState);

export default class HTMLAnchorElementIsolate implements IHTMLAnchorElementIsolate {
  public get download(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'download', false);
  }

  public get hreflang(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'hreflang', false);
  }

  public get referrerPolicy(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
  }

  public get rel(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'rel', false);
  }

  public get relList(): IDOMTokenList {
    throw new Error('HTMLAnchorElementIsolate.relList getter not implemented');
  }

  public get target(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'target', false);
  }

  public get text(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'text', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAnchorElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly download?: Promise<string>;
  readonly hreflang?: Promise<string>;
  readonly referrerPolicy?: Promise<string>;
  readonly rel?: Promise<string>;
  readonly relList?: IDOMTokenList;
  readonly target?: Promise<string>;
  readonly text?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLAnchorElementIsolatePropertyKeys = ['download', 'hreflang', 'referrerPolicy', 'rel', 'relList', 'target', 'text', 'type'];

export const HTMLAnchorElementIsolateConstantKeys = [];
