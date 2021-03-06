import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLCanvasElement, IHTMLElement, IMediaStream, IOffscreenCanvas } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCanvasElement, IHTMLCanvasElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLCanvasElement>('HTMLCanvasElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLCanvasElement>(getState, setState, awaitedHandler);

export function HTMLCanvasElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLCanvasElement extends HTMLElement implements IHTMLCanvasElement, PromiseLike<IHTMLCanvasElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLCanvasElement',
      });
    }

    // properties

    public get height(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'height', false);
    }

    public get width(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'width', false);
    }

    // methods

    public captureStream(frameRequestRate?: number): IMediaStream {
      throw new Error('HTMLCanvasElement.captureStream not implemented');
    }

    public toDataURL(type?: string, quality?: any): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'toDataURL', [type, quality]);
    }

    public transferControlToOffscreen(): IOffscreenCanvas {
      throw new Error('HTMLCanvasElement.transferControlToOffscreen not implemented');
    }

    public then<TResult1 = IHTMLCanvasElement, TResult2 = never>(onfulfilled?: ((value: IHTMLCanvasElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLCanvasElementPropertyKeys, HTMLCanvasElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCanvasElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly height?: Promise<number>;
  readonly width?: Promise<number>;
}

export const HTMLCanvasElementPropertyKeys = [...HTMLElementPropertyKeys, 'height', 'width'];

export const HTMLCanvasElementConstantKeys = [...HTMLElementConstantKeys];
