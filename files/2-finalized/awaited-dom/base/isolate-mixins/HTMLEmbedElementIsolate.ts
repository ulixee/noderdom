import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLEmbedElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLEmbedElementIsolate, IHTMLEmbedElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLEmbedElementIsolate>('HTMLEmbedElementIsolate', getState, setState);

export default class HTMLEmbedElementIsolate implements IHTMLEmbedElementIsolate {
  public get align(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'align', false);
  }

  public get height(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'height', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get src(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'src', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }

  public get width(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'width', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLEmbedElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly align?: Promise<string>;
  readonly height?: Promise<number> | Promise<string>;
  readonly name?: Promise<string>;
  readonly src?: Promise<string>;
  readonly type?: Promise<string>;
  readonly width?: Promise<number> | Promise<string>;
}

export const HTMLEmbedElementIsolatePropertyKeys = ['align', 'height', 'name', 'src', 'type', 'width'];

export const HTMLEmbedElementIsolateConstantKeys = [];
