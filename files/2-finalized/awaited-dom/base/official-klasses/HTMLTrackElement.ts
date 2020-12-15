import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLTrackElement, IHTMLElement, ITextTrack } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTrackElement, IHTMLTrackElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTrackElement>('HTMLTrackElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLTrackElement>(getState, setState, awaitedHandler);

export function HTMLTrackElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTrackElement extends HTMLElement implements IHTMLTrackElement, PromiseLike<IHTMLTrackElement> {
    public static readonly ERROR: number = 3;
    public static readonly LOADED: number = 2;
    public static readonly LOADING: number = 1;
    public static readonly NONE: number = 0;

    public readonly ERROR: number = 3;
    public readonly LOADED: number = 2;
    public readonly LOADING: number = 1;
    public readonly NONE: number = 0;
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLTrackElement>(this, HTMLTrackElementConstantKeys, HTMLTrackElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLTrackElement',
      });
    }

    // properties

    public get default(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'default', false);
    }

    public get kind(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'kind', false);
    }

    public get label(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'label', false);
    }

    public get readyState(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'readyState', false);
    }

    public get src(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'src', false);
    }

    public get srclang(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'srclang', false);
    }

    public get track(): Promise<ITextTrack> {
      return awaitedHandler.getProperty<ITextTrack>(this, 'track', false);
    }

    public then<TResult1 = IHTMLTrackElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTrackElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTrackElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly default?: Promise<boolean>;
  readonly kind?: Promise<string>;
  readonly label?: Promise<string>;
  readonly readyState?: Promise<number>;
  readonly src?: Promise<string>;
  readonly srclang?: Promise<string>;
  readonly track?: Promise<ITextTrack>;
}

export const HTMLTrackElementPropertyKeys = [...HTMLElementPropertyKeys, 'default', 'kind', 'label', 'readyState', 'src', 'srclang', 'track'];

export const HTMLTrackElementConstantKeys = [...HTMLElementConstantKeys, 'ERROR', 'LOADED', 'LOADING', 'NONE'];
