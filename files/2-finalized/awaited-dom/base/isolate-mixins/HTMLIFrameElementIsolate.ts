import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLIFrameElementIsolate } from '../interfaces/isolate';
import { ISuperDocument } from '../interfaces/super';
import { IFeaturePolicy, IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLIFrameElementIsolate, IHTMLIFrameElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLIFrameElementIsolate>('HTMLIFrameElementIsolate', getState, setState);

export default class HTMLIFrameElementIsolate implements IHTMLIFrameElementIsolate {
  public get align(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'align', false);
  }

  public get allow(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'allow', false);
  }

  public get allowFullscreen(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'allowFullscreen', false);
  }

  public get allowPaymentRequest(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'allowPaymentRequest', false);
  }

  public get contentDocument(): ISuperDocument {
    throw new Error('HTMLIFrameElementIsolate.contentDocument getter not implemented');
  }

  public get csp(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'csp', false);
  }

  public get featurePolicy(): IFeaturePolicy {
    throw new Error('HTMLIFrameElementIsolate.featurePolicy getter not implemented');
  }

  public get frameBorder(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'frameBorder', false);
  }

  public get height(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'height', false);
  }

  public get longDesc(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'longDesc', false);
  }

  public get marginHeight(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'marginHeight', false);
  }

  public get marginWidth(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'marginWidth', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get referrerPolicy(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
  }

  public get sandbox(): IDOMTokenList {
    throw new Error('HTMLIFrameElementIsolate.sandbox getter not implemented');
  }

  public get scrolling(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'scrolling', false);
  }

  public get src(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'src', false);
  }

  public get srcdoc(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'srcdoc', false);
  }

  public get width(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'width', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLIFrameElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly align?: Promise<string>;
  readonly allow?: Promise<string>;
  readonly allowFullscreen?: Promise<boolean>;
  readonly allowPaymentRequest?: Promise<boolean>;
  readonly contentDocument?: ISuperDocument;
  readonly csp?: Promise<string>;
  readonly featurePolicy?: IFeaturePolicy;
  readonly frameBorder?: Promise<string>;
  readonly height?: Promise<number> | Promise<string>;
  readonly longDesc?: Promise<string>;
  readonly marginHeight?: Promise<string>;
  readonly marginWidth?: Promise<string>;
  readonly name?: Promise<string>;
  readonly referrerPolicy?: Promise<string>;
  readonly sandbox?: IDOMTokenList;
  readonly scrolling?: Promise<string>;
  readonly src?: Promise<string>;
  readonly srcdoc?: Promise<string>;
  readonly width?: Promise<number> | Promise<string>;
}

export const HTMLIFrameElementIsolatePropertyKeys = ['align', 'allow', 'allowFullscreen', 'allowPaymentRequest', 'contentDocument', 'csp', 'featurePolicy', 'frameBorder', 'height', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'referrerPolicy', 'sandbox', 'scrolling', 'src', 'srcdoc', 'width'];

export const HTMLIFrameElementIsolateConstantKeys = [];
