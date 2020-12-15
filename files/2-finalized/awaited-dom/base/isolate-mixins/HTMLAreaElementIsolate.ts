import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLAreaElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLAreaElementIsolate, IHTMLAreaElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLAreaElementIsolate>('HTMLAreaElementIsolate', getState, setState);

export default class HTMLAreaElementIsolate implements IHTMLAreaElementIsolate {
  public get alt(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'alt', false);
  }

  public get coords(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'coords', false);
  }

  public get download(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'download', false);
  }

  public get hreflang(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'hreflang', false);
  }

  public get noHref(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'noHref', false);
  }

  public get referrerPolicy(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
  }

  public get rel(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'rel', false);
  }

  public get relList(): IDOMTokenList {
    throw new Error('HTMLAreaElementIsolate.relList getter not implemented');
  }

  public get shape(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'shape', false);
  }

  public get target(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'target', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAreaElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly alt?: Promise<string>;
  readonly coords?: Promise<string>;
  readonly download?: Promise<string>;
  readonly hreflang?: Promise<string>;
  readonly noHref?: Promise<boolean>;
  readonly referrerPolicy?: Promise<string>;
  readonly rel?: Promise<string>;
  readonly relList?: IDOMTokenList;
  readonly shape?: Promise<string>;
  readonly target?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLAreaElementIsolatePropertyKeys = ['alt', 'coords', 'download', 'hreflang', 'noHref', 'referrerPolicy', 'rel', 'relList', 'shape', 'target', 'type'];

export const HTMLAreaElementIsolateConstantKeys = [];
