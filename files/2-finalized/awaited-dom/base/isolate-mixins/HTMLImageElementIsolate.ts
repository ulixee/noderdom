import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLImageElementIsolate } from '../interfaces/isolate';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLImageElementIsolate, IHTMLImageElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLImageElementIsolate>('HTMLImageElementIsolate', getState, setState);

export default class HTMLImageElementIsolate implements IHTMLImageElementIsolate {
  public get alt(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'alt', false);
  }

  public get complete(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'complete', false);
  }

  public get crossOrigin(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'crossOrigin', true);
  }

  public get currentSrc(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'currentSrc', false);
  }

  public get decoding(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'decoding', false);
  }

  public get height(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<number>(this, 'height', false);
  }

  public get isMap(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'isMap', false);
  }

  public get naturalHeight(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'naturalHeight', false);
  }

  public get naturalWidth(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'naturalWidth', false);
  }

  public get referrerPolicy(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
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

  public get useMap(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'useMap', false);
  }

  public get width(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<number>(this, 'width', false);
  }

  public get x(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'x', false);
  }

  public get y(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'y', false);
  }

  // methods

  public decode(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'decode', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLImageElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly alt?: Promise<string>;
  readonly complete?: Promise<boolean>;
  readonly crossOrigin?: Promise<string | null>;
  readonly currentSrc?: Promise<string>;
  readonly decoding?: Promise<string>;
  readonly height?: Promise<number> | Promise<string>;
  readonly isMap?: Promise<boolean>;
  readonly naturalHeight?: Promise<number>;
  readonly naturalWidth?: Promise<number>;
  readonly referrerPolicy?: Promise<string>;
  readonly sizes?: Promise<string> | IDOMTokenList;
  readonly src?: Promise<string>;
  readonly srcset?: Promise<string>;
  readonly useMap?: Promise<string>;
  readonly width?: Promise<number> | Promise<string>;
  readonly x?: Promise<number>;
  readonly y?: Promise<number>;
}

export const HTMLImageElementIsolatePropertyKeys = ['alt', 'complete', 'crossOrigin', 'currentSrc', 'decoding', 'height', 'isMap', 'naturalHeight', 'naturalWidth', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'width', 'x', 'y'];

export const HTMLImageElementIsolateConstantKeys = [];
