import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLImageElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLImageElement, IHTMLImageElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLImageElement>('HTMLImageElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLImageElement>(getState, setState, awaitedHandler);

export function HTMLImageElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLImageElement extends HTMLElement implements IHTMLImageElement, PromiseLike<IHTMLImageElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLImageElement',
      });
    }

    // properties

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

    public get height(): Promise<number> {
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

    public get sizes(): Promise<string> {
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

    public get width(): Promise<number> {
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

    public then<TResult1 = IHTMLImageElement, TResult2 = never>(onfulfilled?: ((value: IHTMLImageElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLImageElementPropertyKeys, HTMLImageElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLImageElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly alt?: Promise<string>;
  readonly complete?: Promise<boolean>;
  readonly crossOrigin?: Promise<string | null>;
  readonly currentSrc?: Promise<string>;
  readonly decoding?: Promise<string>;
  readonly height?: Promise<number>;
  readonly isMap?: Promise<boolean>;
  readonly naturalHeight?: Promise<number>;
  readonly naturalWidth?: Promise<number>;
  readonly referrerPolicy?: Promise<string>;
  readonly sizes?: Promise<string>;
  readonly src?: Promise<string>;
  readonly srcset?: Promise<string>;
  readonly useMap?: Promise<string>;
  readonly width?: Promise<number>;
  readonly x?: Promise<number>;
  readonly y?: Promise<number>;
}

export const HTMLImageElementPropertyKeys = [...HTMLElementPropertyKeys, 'alt', 'complete', 'crossOrigin', 'currentSrc', 'decoding', 'height', 'isMap', 'naturalHeight', 'naturalWidth', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'width', 'x', 'y'];

export const HTMLImageElementConstantKeys = [...HTMLElementConstantKeys];
