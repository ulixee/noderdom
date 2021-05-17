import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLIFrameElement, IHTMLElement, IFeaturePolicy, IDOMTokenList } from '../interfaces/official';
import { ISuperDocument } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLIFrameElement, IHTMLIFrameElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLIFrameElement>('HTMLIFrameElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLIFrameElement>(getState, setState, awaitedHandler);

export function HTMLIFrameElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLIFrameElement extends HTMLElement implements IHTMLIFrameElement, PromiseLike<IHTMLIFrameElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLIFrameElement',
      });
    }

    // properties

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
      throw new Error('HTMLIFrameElement.contentDocument getter not implemented');
    }

    public get csp(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'csp', false);
    }

    public get featurePolicy(): IFeaturePolicy {
      throw new Error('HTMLIFrameElement.featurePolicy getter not implemented');
    }

    public get frameBorder(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'frameBorder', false);
    }

    public get height(): Promise<string> {
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
      throw new Error('HTMLIFrameElement.sandbox getter not implemented');
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

    public get width(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'width', false);
    }

    public then<TResult1 = IHTMLIFrameElement, TResult2 = never>(onfulfilled?: ((value: IHTMLIFrameElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLIFrameElementPropertyKeys, HTMLIFrameElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLIFrameElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
  readonly allow?: Promise<string>;
  readonly allowFullscreen?: Promise<boolean>;
  readonly allowPaymentRequest?: Promise<boolean>;
  readonly contentDocument?: ISuperDocument;
  readonly csp?: Promise<string>;
  readonly featurePolicy?: IFeaturePolicy;
  readonly frameBorder?: Promise<string>;
  readonly height?: Promise<string>;
  readonly longDesc?: Promise<string>;
  readonly marginHeight?: Promise<string>;
  readonly marginWidth?: Promise<string>;
  readonly name?: Promise<string>;
  readonly referrerPolicy?: Promise<string>;
  readonly sandbox?: IDOMTokenList;
  readonly scrolling?: Promise<string>;
  readonly src?: Promise<string>;
  readonly srcdoc?: Promise<string>;
  readonly width?: Promise<string>;
}

export const HTMLIFrameElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'allow', 'allowFullscreen', 'allowPaymentRequest', 'contentDocument', 'csp', 'featurePolicy', 'frameBorder', 'height', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'referrerPolicy', 'sandbox', 'scrolling', 'src', 'srcdoc', 'width'];

export const HTMLIFrameElementConstantKeys = [...HTMLElementConstantKeys];
