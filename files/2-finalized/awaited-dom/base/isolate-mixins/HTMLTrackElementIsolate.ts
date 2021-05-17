import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTrackElementIsolate } from '../interfaces/isolate';
import { IDocumentReadyState, ITextTrack } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTrackElementIsolate, IHTMLTrackElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTrackElementIsolate>('HTMLTrackElementIsolate', getState, setState);

export default class HTMLTrackElementIsolate implements IHTMLTrackElementIsolate {
  public static readonly ERROR: number = 3;
  public static readonly LOADED: number = 2;
  public static readonly LOADING: number = 1;
  public static readonly NONE: number = 0;

  public readonly ERROR: number = 3;
  public readonly LOADED: number = 2;
  public readonly LOADING: number = 1;
  public readonly NONE: number = 0;

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

  public get readyState(): Promise<IDocumentReadyState> | Promise<number> {
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
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTrackElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly default?: Promise<boolean>;
  readonly kind?: Promise<string>;
  readonly label?: Promise<string>;
  readonly readyState?: Promise<IDocumentReadyState> | Promise<number>;
  readonly src?: Promise<string>;
  readonly srclang?: Promise<string>;
  readonly track?: Promise<ITextTrack>;
}

export const HTMLTrackElementIsolatePropertyKeys = ['default', 'kind', 'label', 'readyState', 'src', 'srclang', 'track'];

export const HTMLTrackElementIsolateConstantKeys = ['ERROR', 'LOADED', 'LOADING', 'NONE'];
